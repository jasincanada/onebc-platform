# How the desk meets the duties

[The day](README.md) · [Features](features.md) · [Engineering](engineering.md) · **The rules** · [Comment on this page](https://github.com/jasincanada/onebc-platform/discussions/4)

This is political canvassing by phone. The people called are voters and candidates. The ask for support is made by a person in the room.

The claim on this page is narrow and exact. Every duty below is a condition of dialing, or a record the desk must keep. If a condition is missing, the desk does not dial. That is what “addressed” means. It is not a certificate from the CRTC, Elections BC, the privacy commissioner, or a lawyer. The software is still a draft. No live call has been placed. Outbound stays off until you turn it on.

Checked 29 September 2026 against [the CRTC political-call rules](https://crtc.gc.ca/eng/phone/telemarketing/politi.htm), [calls from parties and candidates](https://crtc.gc.ca/eng/phone/rce-vcr/phone.htm), and [Elections BC’s public note](https://elections.bc.ca/docs/2024-election/knowtherules.pdf). The Elections BC note is from the 2024 election. The rule to use is the one in force for this campaign.

## The recording

| Duty | What the desk does |
|---|---|
| A recording must not ask for a vote, money, or support, unless that person already agreed to that specific recording. | The desk has no such script. The recording identifies the caller, states the purpose, and asks yes or no. A person makes the ask. |
| A recording must not hold someone until a caller is free. The CRTC treats that as a call that needs prior agreement. | If no one in the room is free, the call ends. A person calls back later. The recording does not dial that number again. |
| No predictive dialer and no dead air. | One recorded call is placed for each free person. The line is not opened onto silence. |
| After the person hangs up, the equipment disconnects within 10 seconds. | The call is torn down on hangup. A call that stays up is a failed call, not a success. |
| The opening comes first. | It names the party, riding, or candidate. It states the purpose in one line. It gives a local or toll-free number, and an email or a mailing address. Those contacts work for 60 days. If any part is missing, nothing dials. |
| The number on the person’s phone is a number where the party can be reached, for 60 days. | The desk places the call from a number the party controls. It does not display a number it does not own. If that number is missing, nothing dials. |

You can hear the opening on your own computer before the room uses it. That preview does not place a call.

## Stopping, and staying stopped

Parties and candidates are exempt from the National Do Not Call List. They are not exempt from their own list.

The CRTC requires a do-not-call request to be processed immediately, the internal list to be updated within 14 days, and the number kept for three years. The desk is stricter on the update and meets the retention.

- The key on the keypad removes them during the call. They are not transferred.
- The person in the room can remove them.
- A call to the published callback number can remove them the same day. That number must reach someone who can do it. If it does not, the opening is incomplete and nothing dials.
- The removal is written immediately. It is kept at least three years, even if the other notes about that person are deleted.
- A removed number is never loaded into a later shift.

## Who is called

- Only a list the party already has authority to use. You confirm that in one sentence. Without it, nothing dials.
- No invented numbers, and no walk through every number in an exchange.
- A number is called once.
- This riding is in British Columbia. Hours and dialing use Pacific time. A number whose area code is outside British Columbia is not dialed unless that row is marked as a B.C. person. The territories stay off the list because the minutes cost far more, and because the clock there is not Pacific.
- Emergency lines and hospitals are not generated and are not a source list.
- Voters and candidates are treated the same. A candidate who asks to stop is removed.

## Hours

Weekdays 9:00 a.m. to 9:30 p.m. Weekends 10:00 a.m. to 6:00 p.m. Those are the called person’s local hours. For this riding that means Pacific time. The room’s shift sits inside that window. Outside it, nothing dials.

## Privacy

British Columbia’s private-sector privacy law applies to a political party’s list. The list, the notes, the recordings if any, and the removal list stay in Canada. They are not stored in Hillsboro or in any other foreign machine. The earlier Hillsboro price is not the price for this riding.

- The list is not copied into the software package.
- The list is not cached at the front door.
- Callers in the room cannot download the whole list.
- Logs do not keep a full phone number.
- Recording is off unless you turn it on, and turning it on asks you to confirm again. If it is on, the opening says so. A recording is stored in Canada.
- No text message and no email is sent to the people on the list. Mail from the desk goes only to the party’s own users.
- The list is not given to another party.
- An access request is handled by looking up one number. The admin can export or delete that person’s notes. The removal record stays for the three years.
- If the list is exposed, the party tells the people affected and, where the law requires it, the privacy commissioner. The desk does not hide that event.

The voice path is VoIP.ms, a Canadian phone company, on six-second billing. Telnyx bills full minutes and is not used for this riding.

## Filings the desk cannot make for you

| Situation | What has to be true before the first call |
|---|---|
| A federal election is underway, and the shift uses a recording or a phone company to contact voters. | You confirm the CRTC Voter Contact Registry filing is done. The desk does not file it. Without the confirmation, nothing dials. |
| The shift is marked as British Columbia election advertising. Automated calls, and canvassing done as a paid service, can be advertising and need an authorization line: who authorized it, and a B.C. phone number, mailing address, or email. | The opening includes that line. If it is missing, nothing dials. Live calls from your own people, not as a paid advertising service, are a different case. You set which case this shift is before the day starts. |
| Neither of those applies. | You say so, in the setup. The desk records that choice with the date. |

Confirm the Elections BC rule in force for this campaign before relying on the 2024 note.


## If a provider refuses the campaign

The companies named on this roadmap are the ones that fit the published rules as of 29 September 2026. None of them has been asked, in this study, to accept a political canvassing campaign for OneBC.

If VoIP.ms, the Canadian machine, or the front door refuses the use because of compliance, dialing stops. A new study then names only the providers that will actually carry this campaign. A refused provider is not replaced quietly. Telnyx is already out, because it bills a full minute, not because it refused the campaign.

## What is deliberately not claimed

- No regulator has approved this desk.
- No lawyer has signed this page.
- The software is not finished, so the conditions above are the build rules, not a finished test.
- The National Do Not Call List exemption is not a permission to ignore a person who asks to stop.
- Keeping the list in Canada does not, by itself, answer an access request. A person still has to be able to ask, and the party still has to answer.

[Comment on this page](https://github.com/jasincanada/onebc-platform/discussions/4)
