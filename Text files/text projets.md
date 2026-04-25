Occupant le poste d'assistant informatique, j'ai intégré Pleyce en 2024 lors de ma 1ère année de BTS SIO


- Contexte
- Objectif
- Travail réalisé
- Outils et technologie
- Compétence mobilisée (Gestion de parc, Réponse aux incidents, développement de la présence en ligne, Gestion de projet, Service aux utilisateurs, organiser son développement personnel)
- Résultats obtenus
- Bilan personnel

<!--  ------------------------------------------- -->
<!--        PPE - Serveur AD         -->
<!-- -------------------------------------------- -->

<b>Contexte :</b> Durant la seconde année de ma formation, nous avons eu à installer et gérer un serveur AD sous Windows Server. <br> <br>

              <b>Objectif :</b> Installer une machine Windows Server et un service Active Directory qui permet la gestion d'utilisateurs, de groupes et de GPO.<br> <br>

              <b>Travail réalisé :</b> Installer une machine virtuelle sous Windows Server 2022 et le service AD DS. Sur celle-ci, une fois le service installé, configurer des utilisateurs, groupe de ressources (gestion AGDLP) et GPO (Group Policy Object).<br> <br>

              <b>Technologies utilisées :</b> Windows Server 2022, Windows AD DS<br> <br>

              <b>Compétences mobilisées :</b> 
                <br><b>C1:</b> Gérer le patrimoine informatique 
                <br><b>C5:</b> Mettre à disposition des utilisateurs un service informatique<br> <br>

              <b>Résultats obtenus :</b>  Un serveur AD permettant de gérer des ressources et des utilisateurs<br> <br>

              <b>Difficultés rencontrées :</b> La gestion AGDLP peut s'avérer complexe à comprendre au début 


<!--  ------------------------------------------- -->
<!--        PPE - Serveur WEB                     -->
<!-- -------------------------------------------- -->

<b>Contexte :</b> Durant la seconde année de ma formation, nous avons eu à installer et configurer un serveur Web sous Linux. <br> <br>

              <b>Objectif :</b> Installer une machine Linux et un Apache2 ou Nginx qui permet d'héberger une ou plusieurs page(s) web sur une machine.<br> <br>

              <b>Travail réalisé :</b> Installer une machine virtuelle sous Ubuntu Server 24.04 LTS (long-term support, 5 ans de mises à jour gratuites jusqu'à 15 ans avec l'abonnement) et Apache2. Sur celle-ci, une fois le service installé, configurer les certificats SSL afin que les pages web s'affichent en HTTPS.<br> <br>

              <b>Technologies utilisées :</b> Linux Server 24.04 LTS, Apache et OpenSSL<br> <br>

              <b>Compétences mobilisées :</b> 
                <br><b>C1:</b> Gérer le patrimoine informatique 
                <br><b>C3:</b> Développer la présence en ligne de l'organisation
                <br><b>C6:</b> Organiser son développement professionnel<br> <br>

              <b>Résultats obtenus :</b> Un serveur Web Linux/Apache hébergeant du contenu<br> <br>

              <b>Difficultés rencontrées :</b> Les repos apt ne fonctionnent pas toujours


<!--  ------------------------------------------- -->
<!--        PPE - Infrastructure réseau           -->          
<!-- -------------------------------------------- -->

<b>Contexte :</b> Durant la seconde année de ma formation, nous avons eu à préparer et mettre en fonctionnement une infrastructure réseau complète qui serait à destination d'un usage professionnel. <br> <br>

              <b>Objectif :</b> Installer un switch, un routeur accompagné d'un serveur, de machines virtuelles avec divers services ainsi que de postes clients.<br> <br>

              <b>Travail réalisé :</b> Pour la partie réseau pure : installation et configuration d'un switch et routeur Cisco avec VLAN et ACL ainsi qu'un serveur DHCP. Partie système : un serveur Proxmox avec une VM Windows Serveur (AD/GPO, fichiers, DHCP et DNS), une VM Zabbix pour la supervision des équipements, 2 VM Debian (serveur WEB) et 1 VM TrueNAS (stockage de fichiers, sauvegarde serveur automatisée). Également des postes clients Windows 11 liés au domaine AD furent intégrés. <br> <br>

              <b>Technologies utilisées :</b> Cisco IOS, Proxmox, Windows Server, Debian, Ubuntu Server, Zabbix, Samba, Rsync<br> <br>

              <b>Compétences mobilisées :</b> 
                <br><b>C1:</b> Gérer le patrimoine informatique 
                <br><b>C2:</b> Répondre aux incidents et aux demandes d'assistance
                <br><b>C3:</b> Développer la présence en ligne de l'organisation
                <br><b>C4:</b> Travailler en mode projet
                <br><b>C5:</b> Mettre à disposition des utilisateurs un service informatique
                <br><b>C6:</b> Organiser son développement professionnel<br> <br>

              <b>Résultats obtenus :</b> Une infrastructure fonctionnelle reproduisant les besoins d'une entreprise<br> <br>

              <b>Difficultés rencontrées :</b> La gestion des ressources serveur, utilisation SNMP

<!--  ------------------------------------------- -->
<!--        Pro - Changement serveur         -->
<!-- -------------------------------------------- -->
Courant 2024, lors de mon entrée chez Pleyce. L'entreprise reposait son activité sur un serveur ancien non mis à jour, ce qui posait des problèmes de sécurité en plus de problèmes de fiabilité.

Pour remédier à cela, il fallait donc opter pour une solution plus moderne et également plus puissante pour suivre la forte évolution du personnel (80 en septembre 2024 et actuellement 120 en janvier 2026). Nous avions besoin d'une machine capable de supporter une forte charge de travail et qui puisse être conservée dans le temps.

Un serveur bi-CPU avec 256 Go de RAM permettant de virtualiser des machines et services. Sur celui-ci, il y a : une VM (AD/Domaine, DHCP, DNS, Fichier/DFS et servant à des outils internes), une VM pour un contrôleur Wi-Fi, une VM de base de données, une VM pour la sauvegarde, une VM pour un serveur WEB. Le tout fonctionnait sous Windows Server 2022 en hôte comme invité, sauf le contrôleur Wi-Fi sur base Debian.

Lors de ce projet, de nombreuses compétences ont été mobilisées, telles que le développement de la présence en ligne avec le serveur WEB, la gestion de projet sur la globalité du projet et le service aux utilisateurs, étant donné que les services présents sur le serveur étaient à destination des utilisateurs. 

3 mois plus tard, nous avons obtenu un livrable prêt à l'utilisation pour les clients


<!--  ------------------------------------------- -->
<!--        Pro - Déménagement FMD France          -->
<!-- -------------------------------------------- -->

<b>Contexte :</b> Début 2026, pendant la seconde année de mon alternance, j'ai eu à gérer le déménagement de FMD dans de nouveaux locaux (le tout en 1 semaine)<br> <br>

              <b>Objectif :</b> Mettre en place un réseau informatique complet de la partie système avec les postes clients.<br> <br>

              <b>Travail réalisé :</b> J'ai installé un switch Cisco avec une box 5G (temporaire en attendant la fibre) ainsi que des bornes wifi Unifi avec leur contrôleur. Un PC a également été reconverti en serveur pour l'ERP existant en solution temporaire avant une bascule complète vers une solution SAS. Des postes clients ainsi que des tablettes managées ont été fournis.<br> <br>

              <b>Technologies utilisées :</b> Windows, Unifi OS et Cisco IOS<br> <br>

              <b>Compétences mobilisées :</b> 
                <br><b>C1:</b> Gérer le patrimoine informatique
                <br><b>C2:</b> Répondre aux incidents et aux demandes d'assistance<br> <br>
                <br><b>C5:</b> Mettre à disposition des utilisateurs un service informatique
                <br><b>C6:</b> Organiser son développement professionnel<br> <br>

              <b>Résultats obtenus :</b> Un réseau informatique fonctionnel fournissant un environnement de travail complet et compatible avec les attentes d'une PME.<br> <br>

              <b>Difficultés rencontrées :</b> De nombreux imprévus sur le terrain tels que des câbles non tirés ou encore des problèmes d'activation internet.


<!--  ------------------------------------------- -->
<!--        Pro - Serveur de sauvegarde           -->
<!-- -------------------------------------------- -->

<b>Contexte :</b> Début février 2026, pendant la seconde année de mon alternance, j'ai eu à gérer le déploiement d'un serveur de backup afin d'externaliser nos sauvegardes sur un autre site de l'entreprise et de faire de l'archivage de données.<br> <br>

              <b>Objectif :</b> Déployer et mettre en fonctionnement un serveur qui sera dédié au stockage de données.<br> <br>

              <b>Travail réalisé :</b> J'ai acheté un serveur d'occasion (Dell PowerEdge R720xd 12 baies bi CPU avec 128 Go de RAM) Celui-ci permettra de traiter un fort volume de données rapidement grâce à la grande quantité de RAM. TrueNAS a été mon choix concernant l'OS avec l'utilisation de la carte RAID intégrée au serveur (me donnant la possibilité de faire un RAID système et de faciliter la gestion étant moins sensible aux pannes). J'ai également automatisé la récupération de l'archivage des données grâce à des tâches RSYNC notamment.<br> <br>

              <b>Technologies utilisées :</b> TrueNAS, PERC H710 (carte RAID)<br> <br>

              <b>Compétences mobilisées :</b> 
                <br><b>C1:</b> Gérer le patrimoine informatique
                <br><b>C5:</b> Mettre à disposition des utilisateurs un service informatique

              <b>Résultats obtenus :</b> Un serveur de sauvegarde permettant de garder en sécurité les données de l'entreprise.<br> <br>

              <b>Difficultés rencontrées :</b> La gestion RAID et l'installation de carte additionnelle (baie arrière) peuvent s'avérer compliquées.