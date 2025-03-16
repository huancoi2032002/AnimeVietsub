export interface Movie {
    movieId?: string;
    img?: string;
    name?: string;
    originalName?: string;
    views?: number;
    rating?: number;
    episode?: number;
    des?: string;
    studio?: string;
    showtimes?: Date | string; // Có thể để string nếu dữ liệu từ API
    status?: "Ongoing" | "Completed" | "Upcoming"; // Nếu có giá trị cố định
    category?: string[];
    director?: string;
    country?: string;
    followers?: number;
    duration?: string;
    quality?: "HD" | "FHD" | "4K" | "SD"; // Nếu có giá trị cố định
    language?: string;
    season?: string;
    actor?: string[];
}
