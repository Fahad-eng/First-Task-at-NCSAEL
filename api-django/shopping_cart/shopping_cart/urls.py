from django.contrib import admin
from django.urls import path
from rest_framework import routers
from api_app import views
from django.conf.urls import include

router = routers.DefaultRouter()
router.register(r'apiapp', views.CarItemView, 'api_app')
print('hello world')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
