function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}

export function getEdxUserInfo() {
    let cookieValue = getCookie('edx-user-info');
    if (!cookieValue) return null;

    try {
        // Remove wrapping quotes if present
        if (cookieValue.startsWith('"') && cookieValue.endsWith('"')) {
            cookieValue = cookieValue.slice(1, -1);
        }

        // Replace octal commas with real commas
        cookieValue = cookieValue.replace(/\\054/g, ',');

        // Replace escaped quotes with real quotes
        cookieValue = cookieValue.replace(/\\"/g, '"');

        // Now parse
        const userInfo = JSON.parse(cookieValue);

        return {
            username: userInfo.username,
            email: userInfo.email,
            profileImage: userInfo.user_image_urls?.medium || '',
            headerUrls: userInfo.header_urls || {},
            raw: userInfo
        };
    } catch (err) {
        console.error('Failed to parse edx-user-info cookie:', err, cookieValue);
        return null;
    }
}
