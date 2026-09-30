# What the desk does

[The day](README.md) · **Features** · [Engineering](engineering.md) · [Comment on this page](https://github.com/jasincanada/onebc-platform/discussions/2)

Roadmap, page 2 of 3. A GitHub account is enough to comment.

This is the full list. The first riding uses the items marked for now. The rest wait until after 24 October.

## In the room, this riding

- A page in the browser, on the computers already in the centre. Nothing to install.
- Large type, one column, a dark page, and buttons that are easy to hit.
- The script is on the screen. A listen button plays it on that computer only. It does not place a call.
- The next person who stayed is ready for a caller. The caller writes a note, and can undo the last one.
- If the page is refreshed, it returns to the same person.
- An optional sound when a call is waiting.
- Search, and filters for passed, failed, transferred, and removed.
- A caller cannot download the whole list, change the hours, or turn calling on.

## The call, this riding

- The recorded voice says who is calling and gives a callback number. Then it asks yes or no.
- It does not ask for a vote, a donation, or support. A person in the room does that.
- One recorded call is in flight for each free caller. People are not piled on hold.
- If the caller does not pick up quickly, the line ends and a person calls back later. The recording does not dial that number again.
- A key takes someone off the list. They are not transferred, and they are not called again.
- A machine or a fax ends after the greeting.
- Pause stops new calls and does not cut off a call already going. Stop ends the calls this desk started and blocks the next one.
- Canada only. Yukon, the Northwest Territories, and Nunavut are not called. A number is called once.
- Hours are daytime, Pacific time, including the spring and fall clock change. Outside those hours, nothing dials.
- You can hear the greeting before the room uses it.
- One test call to a number you choose. Then the test locks.
- Recording is off unless you turn it on. If it is on, the greeting says so.
- English first.
- The phone bill is counted in steps of six seconds. That is the closest available right now. A full minute, rounded up, will not be used. A true one-second account can replace it later, if one is found.

## The list, this riding

- You load a list you already have a right to call.
- The page shows which rows it will skip, and why: duplicate, bad number, territory, already called, or asked to stop.
- You confirm permission in one sentence. Without that, nothing dials.
- Replacing the list asks you first.
- Only one shift runs on a list at a time.
- You can split the riding so two people work at once, without calling the same number twice.
- The next shift starts where the last one stopped.

## Money and the end of the shift, this riding

- You see how many calls and about how many seconds, before the shift starts.
- Seconds add up while the room is open. Willing calls are shown against the dollars spent.
- A dollar limit for the day stops the shift. Two calls at the same moment cannot slip past it.
- At the end of the day you get one sentence: reached, willing, spoke with someone, asked to stop, and seconds billed.
- You can download the results without opening a database.

## Sign-in, this riding

- Your email is your username. You set a password.
- A second check: a code from an authenticator, or a code by email. A passkey works as well.
- 1Password can fill these. It is not required, and it is not the only way in.
- You can recover a forgotten password, or a lost passkey, with the password and one second check.
- You can sign out of other sessions. A caller’s session ends after it sits idle.
- Too many wrong passwords locks the sign-in for a short time. You can unlock it.
- Turning calling on, exporting the list, allowing a list, or turning recording on asks you to confirm again.
- You invite the room by email. They do not see setup.

## Setup, this riding

- The first visit walks through the steps. You can leave and come back.
- **Set up again** opens the same steps, and asks before it replaces a list, a name, or a connection.
- A connection says Connected or Not connected. It never shows a secret.
- The home page is four lines: List, Mail, Phone, Outbound. Outbound stays off until the separate step.
- A failed connection says what failed, and that nothing was called.

![The path of one call](assets/call-flow.svg)


## The phone companies we looked at

Checked 29 September 2026. Two companies. No contract is signed.

**VoIP.ms.** A Canadian phone company. Their published rule for calls in Canada is six-second steps. A five-second call is billed as six seconds, not as a full minute. Calls inside the ten provinces are published at half a cent US per minute. The territories are much more expensive, which is why those numbers stay off the list. This is the account the riding can use. Their pages: [Canada rates](https://voip.ms/index.php/en/rates/canada) and [how they bill](https://voip.ms/index.php/en/help-center/finances).

**Telnyx.** Already used for a separate doctor search. Their published rule is sixty seconds. An eleven-second call is billed as a full minute. They say they no longer offer six-second billing. That account will not be used for this riding. Their page: [billing increments](https://support.telnyx.com/en/articles/1130659-billing-increments).

No company we found bills a true one second at a time and also does the whole phone job. If one appears, it can replace VoIP.ms.

## After this riding

- A Connect button for NationBuilder, then HubSpot, Maximizer, Salesforce, CiviCRM, or a Google Sheet. The first riding only needs the file.
- Sign in with Google or Microsoft.
- French for the recorded lines, and a caller matched to someone in the room who speaks that language.
- A second riding, a phone app, or a new script. Each is its own quote.

Not in this product: a contact system of our own, numbers taken off the internet, a medical-records connection, or a server for you to run.

[Comment on this page](https://github.com/jasincanada/onebc-platform/discussions/2)
