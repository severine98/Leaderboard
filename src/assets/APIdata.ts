export const user: LeaderboardResponse = {
    profiles: [
        {
            username: 'Einstein',
            weeklyXP: 500,
            isCurrentUser: false
        },
        {
            username: 'STEM-Enthusiast',
            weeklyXP: 1001,
            isCurrentUser: true
        },
        {
            username: 'Ada-Lovelace',
            weeklyXP: 5000,
            isCurrentUser: false
        },
        {
            username: 'Pythagorus',
            weeklyXP: 314159,
            isCurrentUser: false
        }
    ]
}

export interface LeaderboardResponse {
    profiles: Profile[];
}

export interface Profile {
    username: string;
    weeklyXP: number;
    isCurrentUser: boolean;
}
