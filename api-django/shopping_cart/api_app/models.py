from django.db import models

class CartItem(models.Model):
    name = models.CharField(max_length=200)
    price = models.PositiveIntegerField()
    quantity = models.PositiveIntegerField()

    def _str_(self):
        return self.title