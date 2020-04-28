---
sidebarDepth: 3
---

# JobList

This component displays list of published jobs along with filters by category, department and pagination for those long lists.

## Properties

| Value       | Description                                                                                                          | Default | Required |
|-------------|----------------------------------------------------------------------------------------------------------------------|---------|----------|
| detailsPage | Name of the job details page file for the full job display.  This property is used by the default component partial. | job     | No       |
| jobsPerPage | Max number of job posts to display on the page. If it exceeds a pagination is generated                               | 5       | No       |

## Sample Page

```ini
title = "Jobs"
url = "/jobs"
layout = "default"
description = "This page displays a list of published jobs"
is_hidden = 0

[jobList]
detailsPage = "job"
jobsPerPage = 2
==
<div class="jumbotron title-js">
    <div class="container">
        <div class="row">
            <div class="col-8">
                <h1>Careers</h1>
                <p>We have been continuously growing from last 9 years. Join us and be a part of a change. See open
                    positions below</p>
            </div>
        </div>
    </div>
</div>

<div class="container">
    {% component 'jobList' %}
</div>

```
