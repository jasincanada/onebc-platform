# A room where people are actually on the line

For Summer. OneBC. One riding. Daytime. 29 September 2026.

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

## Before a real shift

The riding. The list you already have a right to call. The name people should hear. A number they can call back. The daytime hours. The emails of the people in the room.

$800 is my time and the machines I build on. About $700 is an estimate for accounts billed to you, not to me. I stop if that estimate reaches $700. Phone minutes are yours, Canada to Canada, by the second, and sit outside both figures.

Through 24 October 2026. One riding. English first. Calls stay in Canada. A number is called once. Nothing on this page places a call.

The designed page is [index.html](index.html). This file is the view that opens in the browser on GitHub.
