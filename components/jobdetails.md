---
sidebarDepth: 3
---

# JobDetails

This component displays information about a single job along with a form to apply for the job. This is built only for guest users.

## Properties

| Value                     | Description                                          | Default                           | Required |
|---------------------------|------------------------------------------------------|-----------------------------------|----------|
| applicationSuccessMessage | Message to display when the user applies for the job | Thankyou for applying for the job | No       |

## Sample Page

```ini

title = "Job"
url = "/job/:slug"
layout = "default"
description = "This page displays a single job with a application form"
is_hidden = 0

[jobDetails]
applicationSuccessMessage = "Thankyou for applying for the job. We will get back to you shortly"
==
<div class="container m-t-lg">
    {% component 'jobDetails' %}
</div>

```
