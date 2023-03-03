from django.contrib import admin
from django.urls import path
from company.views import CompanyAPIView


urlpatterns = [
    path("api/list/", CompanyAPIView.as_view(), name="company-list"),
]
