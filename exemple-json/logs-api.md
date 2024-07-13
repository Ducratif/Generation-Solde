---
description: Vous permez d'ajouter des logs à votre API
---

# Logs API

## Logs API

<mark style="color:green;">`GET`</mark> `/logs.php/?apikey=API_KEY&message=Test`

**Headers**

| Name         | Value                   |
| ------------ | ----------------------- |
| Content-Type | `application/json`      |
| apikey       | `votre api`             |
| message      | `votre message de logs` |

**Response**

{% tabs %}
{% tab title="200" %}
```json
{
  "success": "Logs ajouter avec succès"
}
```
{% endtab %}

{% tab title="API non valide" %}
```
{
  "error": "Votre apikey est pas valide"
}
```
{% endtab %}

{% tab title="API non fournit" %}
```
{
  "error": "Merci de fournir une apikey"
}
```
{% endtab %}

{% tab title="Logs non ajouter" %}
```php
{
  "error": "Votre logs na pas pu être ajouter"
}
```
{% endtab %}

{% tab title="Interne" %}
```json
{
  "error": "Erreur interne de notre API, contacter un administrateur"
}
```
{% endtab %}
{% endtabs %}
