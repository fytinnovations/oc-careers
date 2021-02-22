---
sidebarDepth: 3
---

## JobList

This component displays a list of published jobs along with filters by category, department and pagination for those long lists.

### Properties

| Value       | Description                                                                                                          | Default | Required |
|-------------|----------------------------------------------------------------------------------------------------------------------|---------|----------|
| detailsPage | Name of the job details page file for the full job display.  This property is used by the default component partial. | job/details     | Yes       |
| jobsPerPage | Max number of job posts to display on the page. If it exceeds pagination is generated                               | 5       | Yes       |

#### Sample Page

```
title = "Jobs"
url = "/jobs"
layout = "default"
description = "This page displays a list of published jobs"
is_hidden = 0

[jobList]
detailsPage = "job/details"
jobsPerPage = 4
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
In case, if you want to display the list of jobs horizontally you can override the component's partial default.htm as below

```
{% set jobs = __SELF__.jobs %}
{% set detailsPage = __SELF__.detailsPage %}
{% set selectedCategorySlugs = __SELF__.selectedCategorySlugs %}
{% set selectedDepartmentSlugs = __SELF__.selectedDepartmentSlugs %}
{% set pageLink = __SELF__.pageLink %}
{% set categories = __SELF__.categories %}
{% set departments = __SELF__.departments %}

<div class="job-list mt-3">
    <form class="form-inline d-md-flex justify-content-md-end">
        <label for=""></label>
        <select name="category[]" class="form-control mb-2" multiple>
            <option value="">Select Category</option>
            {% for category in categories %}
            <option value="{{category.slug}}" {% if category.slug in selectedCategorySlugs %} selected {% endif %}>
                {{category.name}}
            </option>
            {% endfor %}
        </select>
        <select name="department[]" class="form-control mb-2" multiple>
            <option value="">Select Department</option>
            {% for department in departments %}
            <option value="{{department.slug}}" {% if department.slug in selectedDepartmentSlugs %} selected {% endif
                %}>
                {{department.name}}
            </option>
            {% endfor %}
        </select>
        <button type="submit" class="btn btn-primary">Filter</button>
    </form>

    <div class="d-md-flex justify-content-md-center flex-md-wrap">
        {% for job in jobs %}

        <div class="card mt-5 w-100">
            <h5 class="card-header">{{ job.title }} <span class="float-right font-weight-normal">Posted on :
                    {{ job.created_at|date('M d, Y') }}</span> </h5>

            <div class="card-body">
                <a href="{{detailsPage|page({ job_slug: job.slug })}}" class="btn btn-primary float-right">View
                    Details</a>

                {% if job.department %}
                <p class="card-text"><b>Department :</b>
                    <span>{{job.department.name}}</span>
                </p>
                {% endif %}

                {% if job.type %}
                <p class="card-text"><b>Type :</b> <span>{{job.type.name}}</span>
                </p>
                {% endif %}

                {% if job.category %}
                <p class="card-text"><b>Category :</b>
                    <span>
                        {% if job.category.parent %}
                        {{job.category.parent.name}} > {{job.category.name}}
                        {% else %}
                        {{job.category.name}}
                        {% endif %}
                    </span>
                </p>
                {% endif %}

                <p class="card-text"><b>Positions :</b>
                    <span>{{ job.positions}}</span>
                </p>

                {% if job.city is not empty or job.state is not empty or job.country is not empty %}
                <p class="card-text"><b>Location :</b>
                    <span>
                        {% for value in [job.city, job.state.name,job.country.name] %}
                        {{ value }}

                        {% if value and not loop.last%},{% endif%}
                        {% endfor %}
                    </span>
                </p>
                {% endif %}

                {% if job.skills is not empty%}
                <p class="card-text"><b>Skills :</b>
                    <span>
                        {% for skill in job.skills %}
                        {{ skill.name }}
                        {% if not loop.last %},{% endif %}
                        {% endfor %}
                    </span>
                </p>
                {% endif %}
            </div>
        </div>

        {% else %}

        <div class="alert alert-warning m-t-md" role="alert">
            {{ __SELF__.noJobsMessage }}
        </div>
        {% endfor %}

    </div>

    <nav>
        {% if jobs.lastPage > 1 %}
        <ul class="pagination float-right mt-5">
            {% if jobs.currentPage > 1 %}
            <li class="page-item"><a class="page-link" href="{{ pageLink ~'page='~ (jobs.currentPage - 1) }}">&larr;
                    Prev</a>
            </li>
            {% endif %}

            {% for page in 1..jobs.lastPage %}
            <li class="{{ jobs.currentPage == page ? 'active' : null }} page-item">
                <a class="page-link" href="{{ pageLink ~'page='~ (page) }}">{{ page }}</a>
            </li>
            {% endfor %}

            {% if jobs.lastPage > jobs.currentPage %}
            <li class="page-item"><a class="page-link" href="{{ pageLink ~'page='~ (jobs.currentPage + 1) }}">Next
                    &rarr;</a>
            </li>
            {% endif %}
        </ul>
        {% endif %}
    </nav>
```
Here is how it looks:

![Job Post List Horizontal View](/assets/screenshots/job_post_horizontal.png)

