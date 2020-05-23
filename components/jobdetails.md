---
sidebarDepth: 3
---

# JobDetails

This component displays information about a single job along with a form to apply for the job. This is built only for guest users.

## Properties

| Value                          | Description                                          | Default                           | Required |
|--------------------------------|------------------------------------------------------|-----------------------------------|----------|
| applicationSuccessMessage      | Message to display when the user applies for the job | Thankyou for applying for the job | No       |
| applicationSuccessRedirectPage | Page to redirect when the application is succesfull  | /careers                          | No       |

## Sample Page

```ini

title = "Job"
url = "/job/:slug"
layout = "default"
description = "This page displays a single job with a application form"
is_hidden = 0

[jobDetails]
applicationSuccessMessage = "Thankyou for applying for the job. We will get back to you shortly"
applicationSuccessRedirectPage = "/jobs"
==
<?php
function onEnd()
{
    // Optional - set the page title to the job title
    if ($this->jobDetails->job)
        $this->page->title = $this->jobDetails->job->title;
}
?>
==
<div class="container m-t-lg">
    {% component 'jobDetails' %}
</div>

```

When the application is successful the user will be redirected to the page specified in the [applicationSuccessRedirectPage] property. To display the message set in the [applicationSuccessMessage] property you can add the following twig flash markup to the intended page.

```ini
    {% flash success %}
        <div class="alert alert-success">{{ message }}</div>
    {% endflash %}
```
