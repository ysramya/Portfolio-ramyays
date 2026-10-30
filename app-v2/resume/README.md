# Resume source

`resume.html` is the editable source for `public/resume.pdf`. Rebuild the PDF with headless Chrome:

    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --no-pdf-header-footer \
      --print-to-pdf=public/resume.pdf "file://$PWD/resume/resume.html"

Single column, standard headings and plain bullets on purpose, so applicant-tracking
systems read it cleanly. Keep it to two pages.
