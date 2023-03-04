from django.db import models
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from django.core.paginator import Paginator
from django.shortcuts import render
from rest_framework.response import Response
from products.models import Product
from company.models import Company
from rest_framework import serializers, generics
from rest_framework.renderers import JSONRenderer


class QueryPaginator:
    def _get_query_paginator(self, data, page_number, pagination):
        paginator = Paginator(data, pagination)
        page_number = page_number
        page_obj = paginator.get_page(page_number)
        return render(data, "list.html", {"page_obj": page_obj})


class AuthenticatedAPIView:
    permission_classes = IsAuthenticated


class BaseModelListAPI(generics.ListCreateAPIView, QueryPaginator):
    def list(self, request, *args, **kwargs):
        id = kwargs.get("id")

        if id:
            queryset = self.filter_queryset(self.get_queryset().filter(pk=id))
        else:
            queryset = self.filter_queryset(self.get_queryset())

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)

        return Response(serializer.data)


class ModelListAPIView(BaseModelListAPI, AuthenticatedAPIView):
    pass
