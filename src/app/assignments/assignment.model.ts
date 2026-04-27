export class Assignment {
    _id!: string;
    nom!: string;
    dateDeRendu!: Date;
    rendu!: boolean;
    auteur!: string;
    photoAuteur!: string;
    matiere!: string;
    imageMatiere!: string;
    professorName!: string;
    photoProf!: string;
    note!: number | null;
    remarques!: string;
}

export interface Matiere {
    nom: string;
    image: string;
    prof: string;
    photoProf: string;
}

export const MATIERES: Matiere[] = [
    { nom: 'Base de données', image: 'https://img.icons8.com/color/96/database.png', prof: 'Dr. Kouassi', photoProf: 'https://i.pravatar.cc/150?img=11' },
    { nom: 'Technologies Web', image: 'https://img.icons8.com/color/96/html-5--v1.png', prof: 'Dr. Bamba', photoProf: 'https://i.pravatar.cc/150?img=12' },
    { nom: 'Réseaux', image: 'https://img.icons8.com/color/96/network.png', prof: 'Dr. Traoré', photoProf: 'https://i.pravatar.cc/150?img=13' },
    { nom: 'Intelligence Artificielle', image: 'https://img.icons8.com/color/96/artificial-intelligence.png', prof: 'Dr. Coulibaly', photoProf: 'https://i.pravatar.cc/150?img=14' },
    { nom: 'Systèmes d\'exploitation', image: 'https://img.icons8.com/color/96/linux.png', prof: 'Dr. Diallo', photoProf: 'https://i.pravatar.cc/150?img=15' },
    { nom: 'Algorithmique', image: 'https://img.icons8.com/color/96/algorithm.png', prof: 'Dr. Koné', photoProf: 'https://i.pravatar.cc/150?img=16' },
    { nom: 'Mathématiques', image: 'https://img.icons8.com/color/96/math.png', prof: 'Dr. Touré', photoProf: 'https://i.pravatar.cc/150?img=17' },
    { nom: 'Programmation Java', image: 'https://img.icons8.com/color/96/java-coffee-cup-logo.png', prof: 'Dr. Sangaré', photoProf: 'https://i.pravatar.cc/150?img=18' },
    { nom: 'Angular', image: 'https://img.icons8.com/color/96/angularjs.png', prof: 'Prof. Buffa', photoProf: 'https://i.pravatar.cc/150?img=19' },
    { nom: 'Microservices', image: 'https://img.icons8.com/color/96/spring-logo.png', prof: 'Prof. Buffa', photoProf: 'https://i.pravatar.cc/150?img=19' }
];
