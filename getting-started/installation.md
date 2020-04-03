---
sidebarDepth: 3
---

# Getting started

## Installation

The `Fytinnovations.Careers` plugin depends on `RainLab.User`, `RainLab.Location`
and `RainLab.Translate`.

### Via Marketplace

The plugin can be found on the official [October CMS Marketplace](https://octobercms.com/plugin/fytinnovations-careers). You 
can install it via the Projects feature of the Marketplace itself or via your installation's backend settings.

### Via Console

The easiest way to get you started is by using the command line:

```bash
php artisan plugin:install rainlab.user
php artisan plugin:install rainlab.location
php artisan plugin:install rainlab.translate
php artisan plugin:install fytinnovations.careers
```
### Seeding sample data

After the installation is complete, you may want to seed sample data in order to test how the plugin works.

```bash 
php artisan careers:seed-sample-data
```
You can also use the --force (-f) option which will run the command forcefully without any questions.

```bash 
php artisan careers:seed-sample-data --force
```

If you want to switch back to original state use the command

```bash 
php artisan plugin:refresh Fytinnovations.Careers
```
