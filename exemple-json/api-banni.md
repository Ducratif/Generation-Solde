---
description: Vérifier si votre API Key est encore valide, banni ou fonctionnel
---

# API Banni ?

## Api Banni ?

<mark style="color:green;">`GET`</mark> `/check_apikey.php/?id_discord=123456789`

**Headers**

| Name         | Value              |
| ------------ | ------------------ |
| Content-Type | `application/json` |
| id\_discord  | `votre id discord` |

**Response**

{% tabs %}
{% tab title="Banni" %}
```json
{
  "success": true,
  "message": "The apikey is banned"
}
```
{% endtab %}

{% tab title="Non Banni" %}
```
{
  "success": true,
  "message": "The apikey is not banned"
}
```
{% endtab %}

{% tab title="Erreur ID Discord" %}
```
{
  "error": "id_discord does not exist"
}
```
{% endtab %}

{% tab title="API Key Non Défini" %}
```
{
  "error": "No apikey linked to the account"
}
```
{% endtab %}
{% endtabs %}
