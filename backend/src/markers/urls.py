from django.urls import path, include
from rest_framework import routers
from markers.views import MarkersMapView

router = routers.DefaultRouter()
router.register(r'', MarkersMapView, basename='markers')


urlpatterns = [
    path("", include(router.urls)),
]
