---
sidebarDepth: 3
---

## JobDetails

This component displays information about a single job along with a form to apply for the job. This is built only for guest users.

### Properties

| Value                          | Description                                          | Default                           | Required |
|--------------------------------|------------------------------------------------------|-----------------------------------|----------|
| applicationSuccessMessage      | Message to display when the user applies for the job | Thank you for applying for the job | Yes       |
| applicationSuccessRedirectPage | Page to redirect when the application is successful  | /jobs                          | Yes       |

#### Sample Page

```

title = "Job"
url = "/job/:job_slug"
layout = "default"
description = "This page displays a single job with a application form"
is_hidden = 0

[jobDetails]
applicationSuccessMessage = "Thank you for applying for the job. We will get back to you shortly"
applicationSuccessRedirectPage = "/jobs"
==
<div class="container m-t-lg">
    {% component 'jobDetails' %}
</div>

```

When the application is successful the user will be redirected to the page specified in the [applicationSuccessRedirectPage] property. To display the message set in the [applicationSuccessMessage] property you can add the following twig flash markup to the intended page.

```
    {% flash success %}
        <div class="alert alert-success">{{ message }}</div>
    {% endflash %}
```
