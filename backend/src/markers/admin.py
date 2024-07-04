from django.contrib import admin
from django.contrib.gis import admin as gis_admin

from markers.models import Marker


@gis_admin.register(Marker)
class MarkerAdmin(gis_admin.GISModelAdmin):
    list_display = ("name", "location")