---
description: Voir sont solde de coins
---

# Voir sont solde

## Voir sont solde

<mark style="color:green;">`GET`</mark> `/verify.php/?apikey=API_KEY`

**Headers**

| Name         | Value              |
| ------------ | ------------------ |
| Content-Type | `application/json` |
| apikey       | `votre api`        |

**Response**

{% tabs %}
{% tab title="200" %}
```json
{
  "success": true,
  "id": 1,
  "coins": 100
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
{% endtabs %}
