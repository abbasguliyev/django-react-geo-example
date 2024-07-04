from django.db import models
from django.contrib.gis.db.models import PointField
from rest_framework_gis.serializers import GeoFeatureModelSerializer

# Create your models here.
class Marker(models.Model):
    name = models.CharField(
        max_length=255
    )
    location = PointField()

    def __str__(self):
        return self.name


class MarkerSerializer(GeoFeatureModelSerializer):
    class Meta:
        model = Marker
        geo_field = 'location'
        fields = ('id', 'name')
