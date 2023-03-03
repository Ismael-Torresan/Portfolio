from django.db import models
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from django.core.paginator import Paginator
from django.shortcuts import render


class QueryPaginator:
    def _get_query_paginator(self, data, page_number, pagination):
        paginator = Paginator(data, pagination)
        page_number = page_number
        page_obj = paginator.get_page(page_number)
        return render(data, "list.html", {"page_obj": page_obj})


class AuthenticatedAPIView(APIView):
    permission_classes = IsAuthenticated


class BaseModelListAPI(APIView, QueryPaginator):
    model = None
    app_name = None
    model_name = None
    fields = []

    def get(self, request, *args, **kwargs):
        pagination = request.GET.get("pagination") or 25
        page_number = request.GET.get("page_number")


class ModelListAPIView(BaseModelListAPI, AuthenticatedAPIView):
    pass
