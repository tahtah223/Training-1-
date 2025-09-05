# language: fr
Fonctionnalité: Connexion utilisateur
 Scénario: Connexion réussie
    Étant donné que je visite la page de Connexion
    Quand je saisis "admin" comme nom d'utilisateur
    Et je saisis "1234" comme mot de passe
    Et je clique sur le bouton login
    Alors je devrai avoir le pop avec "Connexion reussie" affiché
