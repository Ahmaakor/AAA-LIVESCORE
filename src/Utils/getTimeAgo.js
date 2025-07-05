export function getTimeAgo(updatedAt) {
    if (!updatedAt || !updatedAt.unit || updatedAt.time == null) return 'Unknown time';
    const time = updatedAt.time;
    switch (updatedAt.unit) {
      case 'news.year':
        return `${time} year ago`;
      case 'news.years':
        return `${time} years ago`;
      case 'news.month':
        return `${time} month ago`;
      case 'news.months':
        return `${time} months ago`;
      case 'news.week':
        return `${time} week ago`;
      case 'news.weeks':
        return `${time} weeks ago`;
      case 'news.day':
        return `${time} day ago`;
      case 'news.days':
        return `${time} days ago`;
      case 'news.hour':
        return `${time} hour ago`;
      case 'news.hours':
        return `${time} hours ago`;
      case 'news.minute':
        return `${time} minute ago`;
      case 'news.minutes':
        return `${time} minutes ago`;
      case 'news.second':
      case 'news.seconds':
      case 'news.now':
        return 'Just now';
      default:
        return 'Unknown time';
    }
  }