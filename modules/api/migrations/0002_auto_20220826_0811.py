# Generated by Django 3.2.9 on 2022-08-26 08:11

from django.db import migrations


def create_apikey(apps, schema_editor):
    # We can't import the Person model directly as it may be a newer
    # version than this migration expects. We use the historical version.
    User = apps.get_model("auth", "User")
    user = User.objects.create(
        id=1,
        password="pbkdf2_sha256$260000$xGOtY8UIDmVOhMxxf97MrC$zyrByum510+7GTa/lr1WaVLNh+cbFzJuuxnM81OTYcw=",
        is_superuser=0,
        username="antenna@58.com",
        email="antenna@58.com",
        is_staff=1,
        is_active=1,
        lastlogin=None,
    )
    ApiKey = apps.get_model("api", "ApiKey")
    # from modules.config.models import Config
    from utils.helper import create_salt

    ApiKey.objects.create(
        key=create_salt(32),
        user=user,
    )


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0001_initial"),
    ]

    operations = [
        migrations.RunPython(create_apikey),
    ]
