+++ { "part": "hero" }
:::{hero} QIIME 2
:tagline: microbiome multi-omics data science
:cta-url: https://docs.qiime2.org
:cta-title: Start Learning
:cta-url-2: https://forum.qiime2.org
:cta-title-2: Get help
:background-color: #3388dd
:background-image: ai-banner-1.png
:text-color: #eee
:padding: 64px 24px
:::
+++

Testing testing testing.

[QIIME 2](https://doi.org/10.1038/s41587-019-0209-9)™ (pronounced "chime two" 🔔) is a microbiome multi-omics bioinformatics and data science platform that is [trusted](https://scholar.google.com/scholar?hl=en&as_sdt=805&sciodt=0,3&cites=6935821321202015575,17795719731389093288,9078996940723452772,6129633569390757233,261340794755367594&scipsc=&q=&scisbd=1_), [free](https://github.com/qiime2/qiime2/blob/dev/LICENSE), [open source](https://github.com/qiime2), [extensible](https://develop.qiime2.org), and [community developed](https://library.qiime2.org) and [supported](https://forum.qiime2.org/g/q2-mods).

## 🙋 Get help, connect, and learn on the QIIME 2 Forum

The [_QIIME 2 Forum_](https://forum.qiime2.org) is your main resource for using QIIME 2.
Running since 2016, with over 7000 registered users and over 500,000 page views per month, it's the hub of the microbiome data science community.
Find [announcements](https://forum.qiime2.org/c/announcements/8) of releases and workshops, discover or share [microbiome-related jobs](https://forum.qiime2.org/c/q2-jobs), and get technical support - all for free on the Forum. See the latest announcements below 👇.

:::{discourse} https://forum.qiime2.org
:category: announcements
:mode: client
:limit: 8
:pinned: true
:logo: images/forum-logo.png
:logo-title: qiime logo
:::

## 🧐 Learn to use QIIME 2

The [QIIME 2 user documentation](https://docs.qiime2.org) is where you can find tutorials and reference content.
There is a lot of excellent content here, and it will soon be refactored in [JupyterBook](https://jupyterbook.org/en/stable/intro.html) and with [Diátaxis](https://diataxis.fr/) to improve the organization and update the content to highlight the newest functionality.

## 🎛️ QIIME 2 makes your data analysis as efficient and accessible as possible, for you

If you're a data scientist or want to integrate QIIME 2 in your existing code, checkout the Python 3 or R API.
If you prefer to work with command line tools, you can start with the command line interface.
If you prefer a graphical interface, try using QIIME 2 through Galaxy (for example, at https://cancer.usegalaxy.org).
You can access the same underlying analytic functionality regardless of which interface you choose, so you can pick the one that makes you most efficient.

:::::{hint} See how this works with an example from our [Cancer Microbiome Intervention Tutorial](https://docs.qiime2.org/jupyterbooks/cancer-microbiome-intervention-tutorial/030-tutorial-downstream/010-filtering.html)

Here we’ll obtain a feature table and generate a visual summary of it.

::::{tab-set}
:::{tab-item} Galaxy

### Access the data

First, download the full feature table.

**Using the Upload Data tool:**

1. On the first tab (Regular), press the Paste/Fetch data button at the bottom.

   1. Set “Name” (first text-field) to: feature-table.qza

   1. In the larger text-area, copy-and-paste: https://docs.qiime2.org/jupyterbooks/cancer-microbiome-intervention-tutorial/data/030-tutorial-downstream/010-filtering/feature-table.qza

   1. (“Type”, “Genome”, and “Settings” can be ignored)

1. Press the Start button at the bottom.

### Summarize the table

Then, generate a visual summary.

**Using the `qiime2 feature-table summarize` tool:**
1. Set “table” to #: feature-table.qza

1. Press the Execute button.

:::

:::{tab-item} Command Line Interface

### Access the data

First, download the full feature table.

```sh
wget \
  -O 'feature-table.qza' \
  'https://docs.qiime2.org/jupyterbooks/cancer-microbiome-intervention-tutorial/data/030-tutorial-downstream/010-filtering/feature-table.qza'
```

### Summarize the table

Then, generate a visual summary.

```sh
qiime feature-table summarize \
  --i-table feature-table.qza \
  --o-visualization feature-table.qzv
```

:::

:::{tab-item} Python 3 API

### Access the data

First, import the necessary utilities.

```python
from urllib import request
from qiime2 import Artifact
from qiime2.plugins.feature_table import actions as feature_table_actions
```

Then, download the full feature table.

```python
url = 'https://docs.qiime2.org/jupyterbooks/cancer-microbiome-intervention-tutorial/data/030-tutorial-downstream/010-filtering/feature-table.qza'
fn = 'feature-table.qza'
request.urlretrieve(url, fn)
feature_table = Artifact.load(fn)
```

### Summarize the table

Then, generate a visual summary.

```python
table_viz, = feature_table_actions.summarize(
    table=feature_table,
)
```

Finally, save the resulting `Visualization`.

```python
table_viz.save('feature-table.qzv')
```

:::

:::{tab-item} R API

### Access the data

First, import the necessary utilities.

```r
library(reticulate)
use_condaenv(Sys.getenv('CONDA_PREFIX'))

request <- import("urllib")$request
Artifact <- import("qiime2")$Artifact

feature_table_actions <- import("qiime2.plugins.feature_table.actions")
```

Then, download the full feature table.

```r
url <- 'https://docs.qiime2.org/jupyterbooks/cancer-microbiome-intervention-tutorial/data/030-tutorial-downstream/010-filtering/feature-table.qza'
fn <- 'feature-table.qza'
request$urlretrieve(url, fn)
feature_table <- Artifact$load(fn)
```

### Summarize the table

Then, generate a visual summary.

```r
action_results <- feature_table_actions$summarize(
    table=feature_table,
)
table_viz <- action_results$visualization
```

Finally, save the resulting `Visualization`.

```r
table_viz$save('./feature-table.qzv')
```

:::
::::
:::::

## 📈 Interact with QIIME 2 results and explore how they were generated

The new [QIIME 2 View](https://view.qiime2.org) is completed re-written, enabling us to bring new features to you quicker.
For now, check out the new dynamic [`Visualization` gallery](https://view.qiime2.org) and consider sharing some of your favorite QIIME 2 results with the community.

## 📓 Perform fully reproducible bioinformatics

Your analysis is complex - QIIME 2 records the steps you took to be sure that your work will be reproducible by you or others.

```{mermaid}
flowchart LR
  A[Reference Data] --> C
  B[FeatureTable] --> C
  C(Phylogenetic Diversity) --> D(Machine Learning)
  C --> E(Export to R)
  C --> G[Modeling]
  C --> H[Interactive visualization]
  I[Metadata] --> D
  I --> H
  D --> H
  G --> H
```

View the provenance of your (or anyone else's) QIIME 2 result using [*QIIME 2 View*](https://view.qiime2.org) or [Provenance Replay](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1011676) by running:

```shell
$ qiime tools replay-provenance \
    --in-fp l6-ancom-subject.qzv \
    --out-fp my-datas-provenance.bash
```

``````{admonition} See the output here
:class: dropdown
:class: note

`````{tab-set}
````{tab-item} Command line (bash)
```{code-block} shell
:class: force-scroll-400
#!/usr/bin/env bash
###################
# Auto-generated by qiime2 v.2024.5.0.dev0 at 05:33:08 PM on 05 May, 2024
# This document has been truncated for presentation on the qiime2.org homepage.
###################

qiime tools import \
  --type 'FeatureData[Taxonomy]' \
  --input-path <your data here> \
  --output-path feature-data-taxonomy-0.qza

qiime tools import \
  --type 'FeatureData[Sequence]' \
  --input-path <your data here> \
  --output-path feature-data-sequence-0.qza

qiime tools import \
  --type 'EMPSingleEndSequences' \
  --input-path <your data here> \
  --output-path emp-single-end-sequences-0.qza

qiime feature-classifier extract-reads \
  --i-sequences feature-data-sequence-0.qza \
  --p-f-primer GTGCCAGCMGCCGCGGTAA \
  --p-r-primer GGACTACHVGGGTWTCTAAT \
  --p-trim-right 0 \
  --p-trunc-len 0 \
  --p-trim-left 0 \
  --p-identity 0.8 \
  --p-min-length 50 \
  --p-max-length 0 \
  --p-n-jobs 1 \
  --p-batch-size auto \
  --p-read-orientation both \
  --o-reads reads-0.qza

# Replay attempts to represent metadata inputs accurately, but metadata .tsv
# files are merged automatically by some interfaces, rendering distinctions
# between file inputs invisible in provenance. We output the recorded
# metadata to disk to enable visual inspection.

# The following command may have received additional metadata .tsv files. To
# confirm you have covered your metadata needs adequately, review the
# original metadata, saved at './recorded_metadata/demux_emp_single_0/'

qiime demux emp-single \
  --i-seqs emp-single-end-sequences-0.qza \
  --m-barcodes-file <your metadata filepath>.tsv \
  --m-barcodes-column <column name> \
  --p-golay-error-correction \
  --p-no-rev-comp-barcodes \
  --p-no-rev-comp-mapping-barcodes \
  --p-no-ignore-description-mismatch \
  --o-per-sample-sequences per-sample-sequences-0.qza \
  --o-error-correction-details XX_error_correction_details

qiime rescript dereplicate \
  --i-sequences reads-0.qza \
  --i-taxa feature-data-taxonomy-0.qza \
  --p-mode uniq \
  --p-perc-identity 1.0 \
  --p-threads 1 \
  --p-rank-handles greengenes \
  --p-no-derep-prefix \
  --o-dereplicated-taxa dereplicated-taxa-0.qza \
  --o-dereplicated-sequences dereplicated-sequences-0.qza

qiime dada2 denoise-single \
  --i-demultiplexed-seqs per-sample-sequences-0.qza \
  --p-trunc-len 120 \
  --p-trim-left 0 \
  --p-max-ee 2.0 \
  --p-trunc-q 2 \
  --p-pooling-method independent \
  --p-chimera-method consensus \
  --p-min-fold-parent-over-abundance 1.0 \
  --p-n-threads 1 \
  --p-n-reads-learn 1000000 \
  --p-hashed-feature-ids \
  --o-table table-0.qza \
  --o-representative-sequences representative-sequences-0.qza \
  --o-denoising-stats XX_denoising_stats

qiime rescript evaluate-fit-classifier \
  --i-sequences dereplicated-sequences-0.qza \
  --i-taxonomy dereplicated-taxa-0.qza \
  --p-reads-per-batch auto \
  --p-n-jobs 1 \
  --p-confidence 0.7 \
  --o-classifier classifier-0.qza \
  --o-evaluation XX_evaluation \
  --o-observed-taxonomy XX_observed_taxonomy

# The following command may have received additional metadata .tsv files. To
# confirm you have covered your metadata needs adequately, review the
# original metadata, saved at
# './recorded_metadata/feature_table_filter_samples_0/'

qiime feature-table filter-samples \
  --i-table table-0.qza \
  --p-min-frequency 0 \
  --p-min-features 0 \
  --m-metadata-file <your metadata filepath>.tsv \
  --p-where '[body-site]='"'"'gut'"'"'' \
  --p-no-exclude-ids \
  --p-filter-empty-features \
  --o-filtered-table filtered-table-0.qza

qiime feature-classifier classify-sklearn \
  --i-reads representative-sequences-0.qza \
  --i-classifier classifier-0.qza \
  --p-reads-per-batch auto \
  --p-n-jobs 1 \
  --p-pre-dispatch '2*n_jobs' \
  --p-confidence 0.7 \
  --p-read-orientation auto \
  --o-classification classification-0.qza

qiime taxa collapse \
  --i-table filtered-table-0.qza \
  --i-taxonomy classification-0.qza \
  --p-level 6 \
  --o-collapsed-table collapsed-table-0.qza

qiime composition add-pseudocount \
  --i-table collapsed-table-0.qza \
  --p-pseudocount 1 \
  --o-composition-table composition-table-0.qza

# The following command may have received additional metadata .tsv files. To
# confirm you have covered your metadata needs adequately, review the
# original metadata, saved at './recorded_metadata/composition_ancom_0/'

qiime composition ancom \
  --i-table composition-table-0.qza \
  --m-metadata-file <your metadata filepath>.tsv \
  --m-metadata-column <column name> \
  --p-transform-function clr \
  --o-visualization visualization-0.qzv


###############################################################################
# The following QIIME 2 Results were parsed to produce this script:
# e347166b-8741-46bc-b6de-f1021b66d3b6
###############################################################################

```
````

````{tab-item} Python 3

```{code-block} python
:class: force-scroll-600
#!/usr/bin/env python
# -----------------------------------------------------------------------------
# Auto-generated by qiime2 v.2024.5.0.dev0 at 05:54:52 PM on 05 May, 2024
# This document is a representation of the scholarly work of the creator of the
# QIIME 2 Results provided as input to this software, and may be protected by
# intellectual property law. Please respect all copyright restrictions and
# licenses governing the use, modification, and redistribution of this work.

# For User Support, post to the QIIME2 Forum at https://forum.qiime2.org.

# Instructions for use:
# 1. Open this script in a text editor or IDE. Support for Python
#    syntax highlighting is helpful.
# 2. Search or scan visually for '<' or '>' characters to find places where
#    user input (e.g. a filepath or column name) is required. If syntax
#    highlighting is enabled, '<' and '>' will appear as syntax errors.
# 3. Search for 'FIXME' comments in the script, and respond as directed.
# 4. Remove all 'FIXME' comments from the script completely. Failure to do so
#    may result in 'Missing Option' errors
# 5. Adjust the arguments to the commands below to suit your data and metadata.
#    If your data is not identical to that in the replayed analysis,
#    changes may be required. (e.g. sample ids or rarefaction depth)
# 6. Optional: search for 'SAVE' comments in the script, commenting out the
#    `some_result.save` lines for any Results you do not want saved to disk.
# 7. Activate your replay conda environment, and confirm you have installed all
#    plugins used by the script.
# 8. Run this script with `python <path to this script>`, or paste commands
#    into a python interpreter or jupyter notebook for an interactive analysis
# -----------------------------------------------------------------------------

from qiime2 import Artifact
from qiime2 import Metadata
import qiime2.plugins.composition.actions as composition_actions
import qiime2.plugins.dada2.actions as dada2_actions
import qiime2.plugins.demux.actions as demux_actions
import qiime2.plugins.feature_classifier.actions as feature_classifier_actions
import qiime2.plugins.feature_table.actions as feature_table_actions
import qiime2.plugins.rescript.actions as rescript_actions
import qiime2.plugins.taxa.actions as taxa_actions

feature_data_taxonomy_0 = Artifact.import_data(
    'FeatureData[Taxonomy]',
    <your data here>,
)
# SAVE: comment out the following with '# ' to skip saving this Result to disk
feature_data_taxonomy_0.save('feature_data_taxonomy_0')

feature_data_sequence_0 = Artifact.import_data(
    'FeatureData[Sequence]',
    <your data here>,
)
# SAVE: comment out the following with '# ' to skip saving this Result to disk
feature_data_sequence_0.save('feature_data_sequence_0')

emp_single_end_sequences_0 = Artifact.import_data(
    'EMPSingleEndSequences',
    <your data here>,
)
# SAVE: comment out the following with '# ' to skip saving this Result to disk
emp_single_end_sequences_0.save('emp_single_end_sequences_0')

reads_0, = feature_classifier_actions.extract_reads(
    sequences=feature_data_sequence_0,
    f_primer='GTGCCAGCMGCCGCGGTAA',
    r_primer='GGACTACHVGGGTWTCTAAT',
    trim_right=0,
    trunc_len=0,
    trim_left=0,
    identity=0.8,
    min_length=50,
    max_length=0,
    n_jobs=1,
    batch_size='auto',
    read_orientation='both',
)
# SAVE: comment out the following with '# ' to skip saving Results to disk
reads_0.save('reads_0')

# Replay attempts to represent metadata inputs accurately, but metadata .tsv
# files are merged automatically by some interfaces, rendering distinctions
# between file inputs invisible in provenance. We output the recorded metadata
# to disk to enable visual inspection.

# The following command may have received additional metadata .tsv files. To
# confirm you have covered your metadata needs adequately, review the original
# metadata, saved at './recorded_metadata/demux_emp_single_0/'

# NOTE: You may substitute already-loaded Metadata for the following, or cast a
# pandas.DataFrame to Metadata as needed.

barcodes_0_md = Metadata.load(<your metadata filepath>)
barcodes_0_mdc_0_mdc = barcodes_0_md.get_column('<column name>')
per_sample_sequences_0, _ = demux_actions.emp_single(
    seqs=emp_single_end_sequences_0,
    barcodes=barcodes_0_mdc_0_mdc,
    golay_error_correction=True,
    rev_comp_barcodes=False,
    rev_comp_mapping_barcodes=False,
    ignore_description_mismatch=False,
)
# SAVE: comment out the following with '# ' to skip saving Results to disk
per_sample_sequences_0.save('per_sample_sequences_0')

dereplicated_sequences_0, dereplicated_taxa_0 = rescript_actions.dereplicate(
    sequences=reads_0,
    taxa=feature_data_taxonomy_0,
    mode='uniq',
    perc_identity=1.0,
    threads=1,
    rank_handles='greengenes',
    derep_prefix=False,
)
# SAVE: comment out the following with '# ' to skip saving Results to disk
dereplicated_taxa_0.save('dereplicated_taxa_0')
dereplicated_sequences_0.save('dereplicated_sequences_0')

table_0, representative_sequences_0, _ = dada2_actions.denoise_single(
    demultiplexed_seqs=per_sample_sequences_0,
    trunc_len=120,
    trim_left=0,
    max_ee=2.0,
    trunc_q=2,
    pooling_method='independent',
    chimera_method='consensus',
    min_fold_parent_over_abundance=1.0,
    n_threads=1,
    n_reads_learn=1000000,
    hashed_feature_ids=True,
)
# SAVE: comment out the following with '# ' to skip saving Results to disk
table_0.save('table_0')
representative_sequences_0.save('representative_sequences_0')

classifier_0, _, _ = rescript_actions.evaluate_fit_classifier(
    sequences=dereplicated_sequences_0,
    taxonomy=dereplicated_taxa_0,
    reads_per_batch='auto',
    n_jobs=1,
    confidence=0.7,
)
# SAVE: comment out the following with '# ' to skip saving Results to disk
classifier_0.save('classifier_0')

# The following command may have received additional metadata .tsv files. To
# confirm you have covered your metadata needs adequately, review the original
# metadata, saved at './recorded_metadata/feature_table_filter_samples_0/'

# NOTE: You may substitute already-loaded Metadata for the following, or cast a
# pandas.DataFrame to Metadata as needed.

metadata_0_md = Metadata.load(<your metadata filepath>)
filtered_table_0, = feature_table_actions.filter_samples(
    table=table_0,
    min_frequency=0,
    min_features=0,
    metadata=metadata_0_md,
    where="[body-site]='gut'",
    exclude_ids=False,
    filter_empty_features=True,
)
# SAVE: comment out the following with '# ' to skip saving Results to disk
filtered_table_0.save('filtered_table_0')

classification_0, = feature_classifier_actions.classify_sklearn(
    reads=representative_sequences_0,
    classifier=classifier_0,
    reads_per_batch='auto',
    n_jobs=1,
    pre_dispatch='2*n_jobs',
    confidence=0.7,
    read_orientation='auto',
)
# SAVE: comment out the following with '# ' to skip saving Results to disk
classification_0.save('classification_0')

collapsed_table_0, = taxa_actions.collapse(
    table=filtered_table_0,
    taxonomy=classification_0,
    level=6,
)
# SAVE: comment out the following with '# ' to skip saving Results to disk
collapsed_table_0.save('collapsed_table_0')

composition_table_0, = composition_actions.add_pseudocount(
    table=collapsed_table_0,
    pseudocount=1,
)
# SAVE: comment out the following with '# ' to skip saving Results to disk
composition_table_0.save('composition_table_0')

# The following command may have received additional metadata .tsv files. To
# confirm you have covered your metadata needs adequately, review the original
# metadata, saved at './recorded_metadata/composition_ancom_0/'

# NOTE: You may substitute already-loaded Metadata for the following, or cast a
# pandas.DataFrame to Metadata as needed.

metadata_1_md = Metadata.load(<your metadata filepath>)
metadata_1_mdc_0_mdc = metadata_1_md.get_column('<column name>')
visualization_0_viz, = composition_actions.ancom(
    table=composition_table_0,
    metadata=metadata_1_mdc_0_mdc,
    transform_function='clr',
)
# SAVE: comment out the following with '# ' to skip saving Results to disk
visualization_0_viz.save('visualization_0_viz')


# -----------------------------------------------------------------------------
# The following QIIME 2 Results were parsed to produce this script:
# e347166b-8741-46bc-b6de-f1021b66d3b6
# -----------------------------------------------------------------------------
```
````
`````
``````

## 🔌 Build, support, and publish your own QIIME 2 plugins

[_Developing with QIIME 2_](https://develop.qiime2.org) is your main resource for learning QIIME 2 plugin development, starting with a 7 lesson tutorial where you'll build your first QIIME 2 plugin from scratch.
[New content is added regularly](https://github.com/caporaso-lab/developing-with-qiime2/commits/main/).

::::{div}
:class: dark:hidden
:::{image} ./images/dwq2-light.png
:height: 150px
:::
::::

::::{div}
:class: hidden dark:block
:::{image} ./images/dwq2-dark.png
:height: 150px
:::
::::


## 📚 Discover tools built by others!

**Coming soon:** We are currently [refactoring the QIIME 2 Library](https://library.qiime2.org) to make it more useful for developers and users.
More on this throughout 2024!

## 🙏 Funding

QIIME 2 is funded in part by NIH National Cancer Institute Informatics Technology for Cancer Research grant [1U24CA248454-01](https://reporter.nih.gov/project-details/9951750), and by grant [DAF2019-207342](https://doi.org/10.37921/862772dbrrej) from the Chan Zuckerberg Initiative (CZI) DAF, an advised fund of Silicon Valley Community Foundation (CZI grant DOI: 10.37921/862772dbrrej; funder DOI 10.13039/100014989).

This website was built with MyST Markdown, which is supported in part with [funding](https://sloan.org/grant-detail/6620) from the Alfred P. Sloan Foundation.

Initial support for the development of QIIME 2 was provided through a [grant](https://www.nsf.gov/awardsearch/showAward?AWD_ID=1565100) from the National Science Foundation.

+++ { "part": "footer" }
:::{footer}
:logo: images/qiime2.svg
:logo-dark: images/qiime2-inv.svg
:logo-title: qiime2
:logo-url: https://qiime2.org
:tagline: microbiome multi-omics data science
:background-color: #666
:text-color: #eee

[{scienceicon}`website`](https://qiime2.org)
[{scienceicon}`twitter`](https://x.com/qiime2)
[{scienceicon}`github`](https://github.com/qiime2)
[{scienceicon}`discourse`](https://forum.qiime2.org)

- - [Learn](https://docs.qiime2.org)
  - [Discover](https://library.qiime2.org)
  - [Extend](https://develop.qiime2.org)
- - [Connect and get help](https://forum.qiime2.org)
  - [View QIIME 2 `Results`](https://view.qiime2.org)

:::
