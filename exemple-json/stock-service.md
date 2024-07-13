# Stock service

## Stock de nos service

<mark style="color:green;">`GET`</mark> `/stock.php/?apikey=API_KEY`

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
  "netflix": 33,
  "spotify": 2,
  "total": 35
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

```
Pour les erreurs, vérifier la documentation de la requête verify
```
