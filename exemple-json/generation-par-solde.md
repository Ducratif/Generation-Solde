---
description: >-
  Cette génération permet de generer n'importe quel service en utilisant vos
  coins sans meme avoir d'abonnement lier à votre compte.
---

# Generation par Solde

## Generation par solde

<mark style="color:green;">`GET`</mark> `/generate_solde.php`

**Headers**

| Name         | Value              |
| ------------ | ------------------ |
| Content-Type | `application/json` |
| apikey       | `votre api`        |
| service      | nom\_du\_service   |

**Response**

{% tabs %}
{% tab title="200" %}
```json
{
  "success": true,
  "email": "test@gmail.com",
  "password": "password1234",
  "before_coins": 992,
  "after_coins": -991,
  "coins": -4
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

{% tab title="Pas assez de coins" %}
```
{
  "error": "Solde de coins insuffisant"
}
```
{% endtab %}

{% tab title="Service existe pas" %}
```
{
  "error": "Le service souhaité n'existe pas"
}
```
{% endtab %}

{% tab title="Non disponible" %}
```
{
  "error": "Service not available for generation"
}
```
{% endtab %}
{% endtabs %}

```
Pour les erreurs, vérifier la documentation de la requête verify
```

{% hint style="danger" %}
ATTENTION !!!!
{% endhint %}

{% code overflow="wrap" %}
```
ATTENTION SOLDE:
Lorsque vous effectuez cette requete, cela vous déduit votre solde de coin.
Voici le tableau de solde déduit:

Free = 1 coins retiré
Basique = 3 coins retiré
Standard = 4 coins retiré
Premium = 5 coins retiré

Cette requete est moins rentable si vous avez un abonnement.
Si vous êtes premium faite la requete de génération de base.
Vérifier bien les services disponible au besoin.

Si vous êtes un membre free cela peux vous interessez.
```
{% endcode %}
