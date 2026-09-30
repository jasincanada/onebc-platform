# How it is built, and what is not finished

[The day](README.md) · [Features](features.md) · **Engineering** · [Comment on this page](https://github.com/jasincanada/onebc-platform/discussions/3)

Roadmap, page 3 of 3. A GitHub account is enough to comment.

The build is in draft. Calling is off. Nothing on this page, or in those drafts, places a live call by itself.

This public site is the briefing. The code lives in a separate private repository. The numbered links below open only for people who already have access to that repository.

## The shape

![The page, the desk, and the connections. The server stays off the page.](assets/desk.svg)

The phone line, the trunk, the call control, fax, and mail are separate connections. The desk chooses them from configuration. Business rules do not call a vendor by name. A campaign for this riding and a doctor-search campaign never share a queue or a list.

The customer grant from a Connect button is stored encrypted. A raw key is not stored in the clear. If a vendor has no Connect button, that step stays Not connected. The desk registers its own callbacks. The room is not sent to a vendor page to paste an address.

## The stack

| Piece | Choice |
|---|---|
| Page and desk | Node 24, TypeScript 7.0.2. TypeScript has no long-term line, so this is the current stable release. |
| Records | Postgres only. Not flat files, and not a laptop database, for the riding. |
| Server | Ubuntu 26.04. Default host is a small rented machine in Hillsboro, the West Coast site. A customer’s own Ubuntu machine is a second profile and must pass the same checks. A laptop is for building only. |
| Front door | The database is not on the public internet. The page is reached through the outer firewall. Port 8080 is not open. |
| Phone billing | A riding profile may dial when the account bills by the second or in steps of six seconds. No all-in-one provider with true per-second billing is confirmed, so six seconds is allowed for now. VoIP.ms publishes six-second billing for Canada and is the riding candidate. Telnyx publishes 60-second billing, says it no longer offers six-second billing, and must not carry this riding. An account that rounds up to a full minute throws before any network call. |

## Where the drafts stand

Coding help on the Pro plan is spent until 1 October 2026. Several drafts stopped mid-write. Their last note is “Changes before error encountered.” None are merged.

| Work | Issue | Draft |
|---|---|---|
| The desk, the list, the short call, the handoff | [28](https://github.com/jasincanada/doctorhunter/issues/28) | [29](https://github.com/jasincanada/doctorhunter/pull/29) |
| Who may do what | [30](https://github.com/jasincanada/doctorhunter/issues/30) | [34](https://github.com/jasincanada/doctorhunter/pull/34) |
| Mail | [31](https://github.com/jasincanada/doctorhunter/issues/31) | [36](https://github.com/jasincanada/doctorhunter/pull/36) |
| Signed call events, and lockout | [32](https://github.com/jasincanada/doctorhunter/issues/32) | [37](https://github.com/jasincanada/doctorhunter/pull/37) |
| Permission, recording, numbers kept out of logs | [33](https://github.com/jasincanada/doctorhunter/issues/33) | [38](https://github.com/jasincanada/doctorhunter/pull/38) |
| A second confirmation | [39](https://github.com/jasincanada/doctorhunter/issues/39) | [43](https://github.com/jasincanada/doctorhunter/pull/43) |
| Removal, pickup timer, dollar limit, Pacific clock | [40](https://github.com/jasincanada/doctorhunter/issues/40) | [44](https://github.com/jasincanada/doctorhunter/pull/44) |
| Lists and keys kept out of the software package | [41](https://github.com/jasincanada/doctorhunter/issues/41) | [45](https://github.com/jasincanada/doctorhunter/pull/45) |
| Health, drain, backup copy | [42](https://github.com/jasincanada/doctorhunter/issues/42) | [46](https://github.com/jasincanada/doctorhunter/pull/46) |
| Closed front door | [47](https://github.com/jasincanada/doctorhunter/issues/47) | [49](https://github.com/jasincanada/doctorhunter/pull/49) |
| No home-computer instructions | [48](https://github.com/jasincanada/doctorhunter/issues/48) | [50](https://github.com/jasincanada/doctorhunter/pull/50) |
| Host profiles | [51](https://github.com/jasincanada/doctorhunter/issues/51) | [52](https://github.com/jasincanada/doctorhunter/pull/52) |
| Setup pages |  | [24](https://github.com/jasincanada/doctorhunter/pull/24) |
| Home screen |  | [23](https://github.com/jasincanada/doctorhunter/pull/23) |
| Past calls |  | [21](https://github.com/jasincanada/doctorhunter/pull/21) |
| Whether calling is on |  | [20](https://github.com/jasincanada/doctorhunter/pull/20) |

Older drafts in that repository belong to the doctor search. They are not part of this riding, and they are not linked here.

## Rules the code must keep

- Outbound is off unless the exact live value is set, and only after the second confirmation.
- A missing host profile, a missing phone connection, or a bill that rounds up to a full minute sends nothing. A six-second step is allowed.
- A list with no permission flag dials nothing.
- Stop can list and hang up only the calls this desk owns.
- Customer lists are not copied into the software image. Research files for the doctor search stay out of the riding host.
- Logs do not contain a full phone number.
- On shutdown, new dials pause. A call already up is not dropped outside the stop path.
- The application database role cannot drop tables. Backups go to a second path. The status line is not green without a recent copy there.

No live call has been placed from this work. True per-second billing is not confirmed. Six-second billing is the working rule until a one-second account is found.

[Comment on this page](https://github.com/jasincanada/onebc-platform/discussions/3)
