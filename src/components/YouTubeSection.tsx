// import { Play, Users, Video, Eye, Bell, CheckCircle, MoreVertical } from "lucide-react";

// const channelStats = {
//   name: "BrajBuzz Tech",
//   handle: "@brajbuzztech",
//   subscribers: "125K",
//   totalVideos: "342",
//   totalViews: "15.2M",
//   avatar: "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?w=200&q=80",
//   banner: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&q=80",
//   isVerified: true,
// };

// const featuredVideos = [
//   {
//     id: 1,
//     title: "iPhone 15 Pro Max vs Samsung S24 Ultra - Ultimate Camera Comparison!",
//     thumbnail: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80",
//     views: "1.2M",
//     date: "2 weeks ago",
//     duration: "18:24",
//   },
//   {
//     id: 2,
//     title: "Best Budget Laptops 2024 - Top 5 Picks Under ₹40,000",
//     thumbnail: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80",
//     views: "856K",
//     date: "1 month ago",
//     duration: "22:15",
//   },
//   {
//     id: 3,
//     title: "Why I Switched from Mac to Windows After 10 Years...",
//     thumbnail: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&q=80",
//     views: "2.1M",
//     date: "3 weeks ago",
//     duration: "15:42",
//   },
//   {
//     id: 4,
//     title: "The Truth About Gaming Monitors - What Nobody Tells You",
//     thumbnail: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=600&q=80",
//     views: "678K",
//     date: "1 week ago",
//     duration: "12:08",
//   },
//   {
//     id: 5,
//     title: "M3 MacBook Pro Review - 6 Months Later (Honest Opinion)",
//     thumbnail: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80",
//     views: "445K",
//     date: "5 days ago",
//     duration: "19:33",
//   },
//   {
//     id: 6,
//     title: "AirPods Pro 2 vs Sony WF-1000XM5 - Which Should You Buy?",
//     thumbnail: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=80",
//     views: "923K",
//     date: "4 days ago",
//     duration: "14:17",
//   },
// ];

// export const YouTubeSection = () => {
//   return (
//     <section id="youtube" className="section-padding bg-black relative overflow-hidden">
//       {/* Red Glow Effects */}
//       <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-[120px] pointer-events-none" />
//       <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      
//       <div className="container-custom relative z-10">
//         {/* Section Header */}
//         <div className="text-center mb-10">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/20 border border-red-600/30 mb-6">
//             <Play size={16} className="text-red-500 fill-red-500" />
//             <span className="text-red-400 text-sm font-medium">YouTube Channel</span>
//           </div>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
//             Watch on <span className="text-red-500">YouTube</span>
//           </h2>
//           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//             Subscribe for honest tech reviews, unboxings, and comparisons every week
//           </p>
//         </div>

//         {/* YouTube-style Channel Header */}
//         <div className="mb-8 bg-gradient-to-b from-[#1a1a1a] to-black rounded-2xl overflow-hidden border border-red-900/20">
//           {/* Banner with Red Overlay */}
//           <div className="relative h-32 md:h-48 overflow-hidden">
//             <img
//               src={channelStats.banner}
//               alt="Channel banner"
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-red-900/20" />
//             <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent" />
//           </div>

//           {/* Channel Info Row */}
//           <div className="p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
//             {/* Avatar with Red Ring */}
//             <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden ring-4 ring-red-600 -mt-12 md:-mt-16 relative z-10 flex-shrink-0 shadow-lg shadow-red-600/30">
//               <img
//                 src={channelStats.avatar}
//                 alt={channelStats.name}
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* Channel Details */}
//             <div className="flex-1">
//               <div className="flex items-center gap-2 mb-1">
//                 <h2 className="text-white text-xl md:text-2xl font-bold">
//                   {channelStats.name}
//                 </h2>
//                 {channelStats.isVerified && (
//                   <CheckCircle size={18} className="text-red-500 fill-red-500" />
//                 )}
//               </div>
//               <div className="flex flex-wrap items-center gap-2 text-gray-400 text-sm mb-2">
//                 <span className="text-red-400">{channelStats.handle}</span>
//                 <span className="w-1 h-1 rounded-full bg-gray-600" />
//                 <span>{channelStats.subscribers} subscribers</span>
//                 <span className="w-1 h-1 rounded-full bg-gray-600" />
//                 <span>{channelStats.totalVideos} videos</span>
//               </div>
//               <p className="text-gray-500 text-sm line-clamp-1">
//                 Your money, your choice, our honest opinion. Tech reviews done right.
//               </p>
//             </div>

//             {/* Subscribe Button - YouTube Red */}
//             <a
//               href="https://www.youtube.com/@BrajBuzzTech"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all shadow-lg shadow-red-600/40 hover:shadow-red-600/60 hover:scale-105"
//             >
//               <Play size={16} className="fill-white" />
//               Subscribe
//             </a>
//           </div>

//           {/* Tabs Navigation with Red Accent */}
//           <div className="border-t border-gray-800 px-4 md:px-6">
//             <div className="flex items-center gap-6 overflow-x-auto hide-scrollbar">
//               {["Videos", "Shorts", "Live", "Playlists", "Community"].map((tab, index) => (
//                 <button
//                   key={tab}
//                   className={`py-4 px-1 text-sm font-medium whitespace-nowrap transition-colors relative ${
//                     index === 0 
//                       ? "text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-red-600" 
//                       : "text-gray-500 hover:text-gray-300"
//                   }`}
//                 >
//                   {tab}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Stats Bar */}
//         <div className="flex items-center gap-6 mb-8 text-sm">
//           <div className="flex items-center gap-2 px-4 py-2 bg-red-600/10 rounded-full border border-red-600/20">
//             <Video size={16} className="text-red-500" />
//             <span className="text-red-400 font-medium">{channelStats.totalVideos} videos</span>
//           </div>
//           <div className="flex items-center gap-2 px-4 py-2 bg-red-600/10 rounded-full border border-red-600/20">
//             <Eye size={16} className="text-red-500" />
//             <span className="text-red-400 font-medium">{channelStats.totalViews} views</span>
//           </div>
//         </div>

//         {/* Video Grid - YouTube Style with Red Accents */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
//           {featuredVideos.map((video) => (
//             <div key={video.id} className="group cursor-pointer">
//               {/* Thumbnail with Red Border on Hover */}
//               <div className="relative aspect-video rounded-xl overflow-hidden mb-3 bg-[#1a1a1a] ring-1 ring-gray-800 group-hover:ring-2 group-hover:ring-red-600/50 transition-all">
//                 <img
//                   src={video.thumbnail}
//                   alt={video.title}
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                 />
//                 {/* Duration Badge */}
//                 <span className="absolute bottom-2 right-2 px-2 py-1 bg-black/90 text-white text-xs font-semibold rounded">
//                   {video.duration}
//                 </span>
//                 {/* Red Play Overlay on Hover */}
//                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
//                   <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100 shadow-lg shadow-red-600/50">
//                     <Play size={24} className="text-white fill-white ml-1" />
//                   </div>
//                 </div>
//                 {/* Red Progress Bar */}
//                 <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800">
//                   <div 
//                     className="h-full bg-red-600" 
//                     style={{ width: `${Math.random() * 100}%` }}
//                   />
//                 </div>
//               </div>

//               {/* Video Info - YouTube Layout */}
//               <div className="flex gap-3">
//                 {/* Channel Avatar with Red Ring */}
//                 <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-transparent group-hover:ring-red-600/50 transition-all">
//                   <img
//                     src={channelStats.avatar}
//                     alt={channelStats.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Title and Meta */}
//                 <div className="flex-1 min-w-0">
//                   <h3 className="text-white text-sm font-medium line-clamp-2 mb-1 group-hover:text-red-400 transition-colors leading-snug">
//                     {video.title}
//                   </h3>
//                   <div className="flex items-center gap-1 text-gray-500 text-xs">
//                     <span className="group-hover:text-red-400/70 transition-colors">{channelStats.name}</span>
//                     {channelStats.isVerified && (
//                       <CheckCircle size={12} className="text-gray-600 fill-gray-600" />
//                     )}
//                   </div>
//                   <div className="flex items-center gap-1 text-gray-500 text-xs">
//                     <span>{video.views} views</span>
//                     <span>•</span>
//                     <span>{video.date}</span>
//                   </div>
//                 </div>

//                 {/* More Options */}
//                 <button className="w-6 h-6 flex items-center justify-center text-gray-600 opacity-0 group-hover:opacity-100 hover:text-white transition-all">
//                   <MoreVertical size={20} />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Load More Button */}
//         <div className="text-center mt-12">
//           <a
//             href="https://www.youtube.com/@BrajBuzzTech"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-2 border-2 border-red-600 text-red-500 px-8 py-3 rounded-full text-sm font-semibold hover:bg-red-600 hover:text-white transition-all"
//           >
//             <Play size={18} className="fill-current" />
//             View All Videos
//           </a>
//         </div>

//         {/* Subscribe CTA Card - Full Red */}
//         <div className="mt-16 bg-gradient-to-r from-red-700 via-red-600 to-red-700 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl shadow-red-600/30 border border-red-500/20">
//           <div className="flex items-center gap-5">
//             <div className="w-16 h-16 rounded-full bg-black/20 flex items-center justify-center">
//               <Bell size={32} className="text-white" />
//             </div>
//             <div>
//               <h3 className="text-white text-2xl font-bold mb-1">
//                 Never miss an upload!
//               </h3>
//               <p className="text-red-100/80 text-sm md:text-base">
//                 Subscribe and hit the bell icon for honest tech reviews every week.
//               </p>
//             </div>
//           </div>
//           <a
//             href="https://www.youtube.com/@BrajBuzzTech"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-gray-900 transition-all shadow-xl hover:scale-105"
//           >
//             <Play size={20} className="fill-white" />
//             Subscribe Now
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };




import { useState, useEffect } from 'react';
import { Play, Users, Video, Eye, Bell, CheckCircle, MoreVertical } from "lucide-react";

// 🔧 TEMPORARY: Use these for testing (remove in production)
const YOUTUBE_API_KEY = 'AIzaSyAZQCCi7dAX8ub1xZPbBQjFTzuFpmgCK7o'; 
const CHANNEL_ID = 'UCby31aj160Uc0u59lvUxlsQ';

export const YouTubeSection = () => {
  const [channelStats, setChannelStats] = useState({
    name: "BrajBuzz Tech",
    handle: "@BrajBuzzTech",
    subscribers: "0",
    totalVideos: "0",
    totalViews: "0",
    avatar: "https://yt3.googleusercontent.com/ytc/AIdro_oKq8z7Z0Kzq8z7Z0Kzq8z7Z0Kzq8z7Z0Kzq8z7Z0K=64s64s64s64s64s64s64s64s",
    banner: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&q=80",
    isVerified: true,
  });
  const [featuredVideos, setFeaturedVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Safe number formatting
  const formatNumber = (num) => {
    if (!num) return '0';
    const n = Number(num);
    if (isNaN(n)) return '0';
    if (n >= 1000000) return (n / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    return n.toString();
  };

  // Safe duration formatting
  const formatDuration = (duration) => {
    try {
      const match = duration?.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/) || [];
      const hours = match[1] || '0';
      const minutes = match[2] || '0';
      const seconds = match[3] || '0';
      const parts = [];
      if (parseInt(hours) > 0) parts.push(hours.padStart(2, '0'));
      parts.push(minutes.padStart(2, '0'), seconds.padStart(2, '0'));
      return parts.join(':');
    } catch {
      return '0:00';
    }
  };

  // Safe date formatting
  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return 'Recent';
      const now = new Date();
      const diffDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
      if (diffDays === 0) return 'Today';
      if (diffDays === 1) return '1 day ago';
      return `${diffDays} days ago`;
    } catch {
      return 'Recent';
    }
  };

  useEffect(() => {
    console.log('🟢 YouTubeSection mounted');
    
    const fetchYouTubeData = async () => {
      try {
        setLoading(true);
        setError('');
        console.log('🔄 Fetching YouTube data...');

        // 1. Channel data
        console.log('📺 Fetching channel...');
        const channelResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${CHANNEL_ID}&key=${YOUTUBE_API_KEY}`
        );
        
        if (!channelResponse.ok) {
          throw new Error(`HTTP ${channelResponse.status}`);
        }
        
        const channelData = await channelResponse.json();
        console.log('✅ Channel data:', channelData);

        if (channelData.items?.[0]) {
          const channel = channelData.items[0];
          const stats = channel.statistics || {};
          
          setChannelStats({
            name: channel.snippet.title || 'BrajBuzz Tech',
            handle: '@BrajBuzzTech',
            subscribers: formatNumber(stats.subscriberCount),
            totalVideos: stats.videoCount || '0',
            totalViews: formatNumber(stats.viewCount),
            avatar: channel.snippet.thumbnails?.default?.url || channelStats.avatar,
            banner: channelStats.banner,
            isVerified: true,
          });
        }

        // 2. Videos data
        console.log('🎥 Fetching videos...');
        const videosResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=6&order=date&type=video&key=${YOUTUBE_API_KEY}`
        );

        if (!videosResponse.ok) {
          console.warn('⚠️ Videos fetch failed, showing mock data');
          setFeaturedVideos([
            { id: 'abc123', title: 'Tech Review Demo', thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg', views: '1K', date: 'Today', duration: '5:23' }
          ]);
        } else {
          const videosData = await videosResponse.json();
          console.log('✅ Videos data:', videosData);
          
          if (videosData.items?.length > 0) {
            setFeaturedVideos(
              videosData.items.slice(0, 6).map(item => ({
                id: item.id.videoId,
                title: item.snippet.title,
                thumbnail: item.snippet.thumbnails?.medium?.url || item.snippet.thumbnails?.default?.url,
                views: 'New',
                date: formatDate(item.snippet.publishedAt),
                duration: '?:??',
              }))
            );
          }
        }

        setLoading(false);
        console.log('🎉 YouTube data loaded successfully');
      } catch (err) {
        console.error('❌ YouTube Error:', err);
        setError('Failed to load YouTube data');
        setLoading(false);
        
        // Show mock data even on error
        setFeaturedVideos([
          { id: 'demo1', title: 'Subscribe for Tech Reviews!', thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg', views: '1K', date: 'Today', duration: '5:23' }
        ]);
      }
    };

    fetchYouTubeData();
  }, []);

  // Debug render
  console.log('🔍 Rendering:', { loading, error, videos: featuredVideos.length });

  return (
    <section id="youtube" className="py-20 bg-black min-h-screen">
      

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-600/30 rounded-full mb-6">
            <Play size={16} className="text-red-400" />
            <span className="text-red-300 text-sm font-medium">YouTube Channel</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Watch on <span className="text-red-500 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">YouTube</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Subscribe for honest tech reviews, unboxings, and comparisons
          </p>
        </div>

        {/* Channel Header */}
        <div className="bg-gradient-to-b from-gray-900/50 to-black rounded-3xl p-8 mb-12 border border-gray-800/50">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full ring-4 ring-red-600/30 shadow-2xl flex-shrink-0">
              <img src={channelStats.avatar} alt="Channel" className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">{channelStats.name}</h3>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                <span className="text-red-400 font-semibold">{channelStats.subscribers} subscribers</span>
                <span>•</span>
                <span>{channelStats.totalVideos} videos</span>
                <span>•</span>
                <span>{channelStats.totalViews} views</span>
              </div>
              <a href="https://youtube.com/@BrajBuzzTech" target="_blank" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-all">
                <Play size={18} />
                Subscribe
              </a>
            </div>
          </div>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            Array.from({length: 6}).map((_, i) => (
              <div key={i} className="animate-pulse bg-gray-900 rounded-2xl p-6">
                <div className="w-full h-48 bg-gray-800 rounded-xl mb-4"></div>
                <div className="h-5 bg-gray-800 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-800 rounded w-1/2"></div>
              </div>
            ))
          ) : featuredVideos.map((video) => (
            <a key={video.id} href={`https://youtube.com/watch?v=${video.id}`} target="_blank" className="group block">
              <div className="relative overflow-hidden rounded-2xl aspect-video bg-gray-900 mb-4 group-hover:scale-[1.02] transition-all duration-300">
                <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all" />
                <span className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded text-xs text-white font-medium">
                  {video.duration}
                </span>
              </div>
              <h4 className="font-semibold text-white line-clamp-2 mb-2 group-hover:text-red-400 transition-colors">{video.title}</h4>
              <p className="text-sm text-gray-500">{video.views} • {video.date}</p>
            </a>
          ))}
        </div>

        {!loading && (
          <div className="text-center mt-16">
            <a href="https://youtube.com/@BrajBuzzTech" target="_blank" className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-red-500/25 transition-all">
              <Play size={24} />
              View All Videos
            </a>
          </div>
        )}
      </div>
    </section>
  );
};
