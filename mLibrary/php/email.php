<?php include("includes/header.php"); ?>
Email <br />a Librarian</h1>

<div id="content">
  <form method="post" action="http://www.emailmeform.com/fid.php?formid=526623" enctype=
  "multipart/form-data" accept-charset="UTF-8">
    <table class="email_form">
      <tr>
        <td>
          <div style="" id="mainmsg"></div>
        </td>
      </tr>
    </table>

    <table class="email_form">
      <tr valign="top">
        <td>Name</td>

        <td><input type="text" name="FieldData0" size="30" /></td>
      </tr>

      <tr valign="top">
        <td>Email
        Address</td>

        <td><input type="text" name="FieldData1" size="30" /></td>
      </tr>

      <tr>
        <td>Phone
        Number</td>

        <td><input type="text" name="FieldData2" size="30" /></td>
      </tr>

      <tr valign="top">
        <td>Mobile Subject</td>

        <td><input type="text" name="FieldData3" size="50" /></td>
      </tr>

      <tr valign="top">
        <td>Question</td>

        <td>
        <textarea name="FieldData4" cols="50" rows="10">
</textarea><br /></td>
      </tr>

      <tr valign="top">
        <td>Status?</td>

        <td><input type="radio" name="FieldData5" value="Student " id="radio50" />
        <label for="radio50">Student</label><br />
        <input type="radio" name="FieldData5" value=" Faculty " id="radio51" />
        <label for=
        "radio51">Faculty</label><br />
        <input type="radio" name="FieldData5" value=" Staff " id="radio52" /> <label for=
        "radio52">Staff</label><br />
        <input type="radio" name="FieldData5" value=" Other" id="radio53" /><label for=
        "radio53">Other</label><br /></td>
      </tr>
            <tr>
              <td class="captcha">Image Verification<img src=
              "http://www.emailmeform.com/turing.php" id="captcha" alt="captcha" name=
              "captcha" /></td>

              <td class="field" valign="top">
                <div>
                  Please enter the text from the
                  image:<br />
                  <input type="text" name="Turing" value="" maxlength="100" size="10" />
                  [ <a href="#" onclick=
                  " document.getElementById('captcha').src = document.getElementById('captcha').src + '?' + (new Date()).getMilliseconds()">
                  Refresh Image</a> ] [ <a href=
                  "http://www.emailmeform.com/?v=turing&amp;pt=popup" onclick=
                  "window.open('http://www.emailmeform.com/?v=turing&amp;pt=popup','_blank','width=400, height=500, left=' + (screen.width-450) + ', top=100');return false;">
                  What's This?</a> ]
                </div>
              </td>
            </tr>

        <tr><td align="right"><input type="text" name="hida2" value="" maxlength="100" size=
        "3" style="display : none;" /> <input type="submit" class="btn" value=
        "Send email" name="Submit" /> <input type="reset" class="btn" value=" Clear "
        name="Clear" /></td>
      </tr>

      <tr>
        <td colspan="2" align="center"><br /></td>
      </tr>
    </table>
  </form>
</div>
<?php include("includes/footer.php"); ?>