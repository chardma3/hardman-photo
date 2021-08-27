
from django.test import SimpleTestCase
from django.urls import reverse, resolve
from .views import profile, order_history


class TestProfilesViews(SimpleTestCase):

    def test_view_profile_resolves(self):
        url = reverse('profile')
        self.assertEqual(resolve(url).func, profile)

    def test_view_order_history_resolves(self):
        url = reverse('order_history', args=['order_number'])
        self.assertEqual(resolve(url).func, order_history)