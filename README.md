# The World in One Picture — 21 November 2026

[![news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/dio955/news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/dio955/news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121)

An entry for make.fun's [news-image-20261121](https://make.fun/bounty/news-image-20261121) bounty: sum up the world news of Saturday 21 November 2026 in one image.

The front page leads with the ICJ's landmark ruling that Myanmar committed genocide against the Rohingya. Around it: Zelensky calling Ukraine's Crimean Bridge attacks "a justified reply", Tehran's claim that a US drone was shot down near the Strait of Hormuz, Denmark expelling a Russian diplomat over an alleged concert plot, and APEC Shenzhen wrapping with Trump–Xi talks on GTA VI's launch weekend.

## How it runs

`main.ts` (Node 22, standard library only) copies the committed front page, `frontpage.jpg`, to the harness output as `entry.png`:

    MAKEFUN_OUTPUT_DIR=out node main.ts

writes `out/entry.png`. No network, no clock, no randomness — every run writes the same bytes.
