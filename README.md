# A room where people are actually on the line

**The day** · [Features](features.md) · [Engineering](engineering.md) · [The rules](compliance.md) · [Comment on this page](https://github.com/jasincanada/onebc-platform/discussions/1)

Roadmap, page 1 of 3. For Summer. One riding. Daytime. 29 September 2026. A GitHub account is enough to comment.

You have already rented the centre. Your people already know a shift. The missing piece is a chair used for a person who stayed, not for a recording that no one answers.

They hear who is calling. They answer yes or no. If they stay, someone in the room asks for their support. The recording never does. If they want off the list, they are off.

You can walk the floor and know the day. You can stop it. You can set a dollar limit before the first call. You hear the greeting yourself before the room uses it.

This is not switched on. It does not call anyone until you say the shift is ready.

## The same room

![Two kinds of shift. Silence, or a person who stayed.](assets/shift.svg)

The centre does not change. The person on the line does.

## One call

![Path of one call. Stop, no one there, or a person makes the ask.](assets/call-flow.svg)

```mermaid
flowchart TD
  list[The list you may call]
  greet[They hear who is calling]
  ask[Yes or no questions]
  stop[Asked to stop. Off the list.]
  none[No one there. The chair stays free.]
  stay[They stayed. A person makes the ask.]
  list --> greet --> ask
  ask --> stop
  ask --> none
  ask --> stay
```

A chair is only taken when someone is there to talk to.

## The end of the shift

![Reached, willing, spoke with someone, asked to stop, seconds billed.](assets/note.svg)

One note. No chase through a pile of paper.


## The rules

This is canvassing. The people called are voters and candidates. A recording may identify who is calling and ask yes or no. It may not ask for a vote, money, or support. That ask is a person in the room. If no one is free, the call ends. Nobody is left on hold.

Parties are exempt from the National Do Not Call List. They are not exempt from identifying themselves, or from honouring a person who asks to stop. The desk will not dial unless the opening, the hours, and your permission for the list are in place.

The detail, including privacy and the difference between a federal registration and a B.C. election rule, is on [The rules](compliance.md). This page is the design. It is not a lawyer’s letter. Outbound stays off until you turn it on.

Through 24 October 2026. One riding. $800 is my time and the machines I build on. About $700 is an estimate for accounts billed to you, not to me. Phone minutes are yours, counted in steps of six seconds. That is the closest we can get for now. A company that rounds every call up to a full minute will not be used. VoIP.ms is the six-second account the riding can use. Telnyx bills full minutes and stays on the doctor search only. They sit outside both figures. Nothing on this page places a call.

[Comment on this page](https://github.com/jasincanada/onebc-platform/discussions/1)
