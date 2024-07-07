// node_modules/unist-builder/lib/index.js
function u(type, props, value) {
  const node = { type: String(type) };
  if ((value === void 0 || value === null) && (typeof props === "string" || Array.isArray(props))) {
    value = props;
  } else {
    Object.assign(node, props);
  }
  if (Array.isArray(value)) {
    node.children = value;
  } else if (value !== void 0 && value !== null) {
    node.value = String(value);
  }
  return node;
}

// node_modules/nanoid/index.js
import { randomFillSync } from "crypto";
var POOL_SIZE_MULTIPLIER = 128;
var pool;
var poolOffset;
var fillPool = (bytes) => {
  if (!pool || pool.length < bytes) {
    pool = Buffer.allocUnsafe(bytes * POOL_SIZE_MULTIPLIER);
    randomFillSync(pool);
    poolOffset = 0;
  } else if (poolOffset + bytes > pool.length) {
    randomFillSync(pool);
    poolOffset = 0;
  }
  poolOffset += bytes;
};
var random = (bytes) => {
  fillPool(bytes -= 0);
  return pool.subarray(poolOffset - bytes, poolOffset);
};
var customRandom = (alphabet, defaultSize, getRandom) => {
  let mask = (2 << 31 - Math.clz32(alphabet.length - 1 | 1)) - 1;
  let step = Math.ceil(1.6 * mask * defaultSize / alphabet.length);
  return (size = defaultSize) => {
    let id = "";
    while (true) {
      let bytes = getRandom(step);
      let i = step;
      while (i--) {
        id += alphabet[bytes[i] & mask] || "";
        if (id.length === size) return id;
      }
    }
  };
};
var customAlphabet = (alphabet, size = 21) => customRandom(alphabet, size, random);

// node_modules/myst-common/dist/utils.js
var az = "abcdefghijklmnopqrstuvwxyz";
var alpha = az + az.toUpperCase();
var numbers = "0123456789";
var nanoidAZ = customAlphabet(alpha, 1);
var nanoidAZ9 = customAlphabet(alpha + numbers, 9);
function createId() {
  return nanoidAZ() + nanoidAZ9();
}

// src/discourse.ts
function noBooleans(value) {
  return value === "true" ? void 0 : value;
}
var discourseDirective = {
  name: "discourse",
  doc: "An configurable site footer with a logo, tagline, and links.",
  arg: { type: String, required: true, doc: "URL of the discourse forum" },
  options: {
    category: { type: String, doc: "Name of the category to list topics from", required: true },
    mode: {
      type: String,
      doc: "The type of widget to display (default: `server`), (values: `widget`, `server`, `client`)",
      default: "server"
    },
    logo: { type: String, doc: "The forum logo" },
    "logo-dark": { type: String, doc: "Dark mode version of the forum logo" },
    "logo-title": { type: String, doc: "Title of the logo, used as alt text" },
    limit: { type: Number, doc: "The maximum number of topics to show" },
    pinned: { type: Boolean, doc: "Whether to show pinned topics" }
  },
  body: {
    type: String,
    doc: "The body of the footer should contain links in the form of a list with up to 2 nested lists"
  },
  run(data, vfile, ctx) {
    const url = data.arg;
    const modes = ["widget", "server", "client"];
    console.log("data", data.options);
    const json = {
      category: noBooleans(data.options.category),
      mode: modes.includes(data.options.mode) ? data.options.mode : "server",
      limit: noBooleans(data.options.limit),
      pinned: data.options.pinned === true,
      logoTitle: noBooleans(data.options["logo-title"])
    };
    const ids = {
      logo: noBooleans(data.options.logo) ? createId() : void 0,
      logoDark: noBooleans(data.options["logo-dark"]) ? createId() : void 0
    };
    const children = [];
    if (data.options.logo) {
      children.push(
        u("image", {
          align: "left",
          url: data.options.logo,
          identifier: ids.logo,
          alt: data.options.logoTitle
        })
      );
    }
    if (data.options["logo-dark"]) {
      children.push(
        u("image", {
          align: "left",
          url: data.options["logo-dark"],
          identifier: ids.logoDark,
          alt: data.options.logoTitle
        })
      );
    }
    return [
      u("discourse", { data: { ...data.node.data, identifiers: ids }, ...json, url }, children)
    ];
  }
};
var plugin = { name: "Discourse by Curvenote", directives: [discourseDirective] };
var discourse_default = plugin;
export {
  discourse_default as default
};
//# sourceMappingURL=discourse.mjs.map