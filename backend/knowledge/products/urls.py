from django.contrib import admin
from django.urls import path
from products.views import ProductAPIView


urlpatterns = [
    path("api/list/", ProductAPIView.as_view(), name="product-list"),
    path("api/list/<int:id>", ProductAPIView.as_view(), name="product-list"),
]
