import json

from django.core.serializers import (
    serialize,
)

from markers.models import Marker, MarkerSerializer
from rest_framework.views import Response
from rest_framework import status, viewsets


class MarkersMapView(viewsets.ModelViewSet):
    queryset = Marker.objects.all()
    serializer_class = MarkerSerializer