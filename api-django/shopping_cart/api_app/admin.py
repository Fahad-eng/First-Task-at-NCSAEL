from django.contrib import admin
from .models import CartItem

class Admin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')

# Register your models here.
admin.site.register(CartItem)
