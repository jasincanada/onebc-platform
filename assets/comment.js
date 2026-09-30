(function () {
  var mount = document.getElementById("note");
  if (!mount) return;
  var params = new URLSearchParams(location.search);
  if (params.get("sent") === "1") {
    mount.innerHTML = "<p class=\"sent\">Sent. It does not appear on the page. No GitHub account was needed.</p>";
    return;
  }
  var page = document.title || location.pathname;
  var next = location.origin + location.pathname + "?sent=1";
  mount.innerHTML =
    "<h2>Leave a note</h2>" +
    "<p>You do not need a GitHub account. The note is sent to Jas. It is not posted on this page.</p>" +
    "<form method=\"POST\" action=\"https://formsubmit.co/jasminder.bangar@gmail.com\">" +
    "<input type=\"hidden\" name=\"_subject\" value=\"Note on the OneBC briefing\">" +
    "<input type=\"hidden\" name=\"_captcha\" value=\"false\">" +
    "<input type=\"hidden\" name=\"_template\" value=\"table\">" +
    "<input type=\"hidden\" name=\"_next\" value=\"" + next + "\">" +
    "<input type=\"text\" name=\"_honey\" class=\"hp\" tabindex=\"-1\" autocomplete=\"off\">" +
    "<input type=\"hidden\" name=\"page\" value=\"" + page.replace(/\"/g, "") + "\">" +
    "<label for=\"note-from\">Your name, if you want to give it</label>" +
    "<input id=\"note-from\" name=\"name\" type=\"text\" autocomplete=\"name\">" +
    "<label for=\"note-email\">Your email, if you want a reply. Not required.</label>" +
    "<input id=\"note-email\" name=\"email\" type=\"email\" autocomplete=\"email\">" +
    "<label for=\"note-body\">The note</label>" +
    "<textarea id=\"note-body\" name=\"note\" required rows=\"5\"></textarea>" +
    "<button type=\"submit\">Send the note</button>" +
    "</form>";
})();
