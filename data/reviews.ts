export type Review = {
  id: string;
  photographerId: string;
  customerName: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
};

export const reviews: Review[] = [
  // Photographer 1: Arjun Photography
  { id: 'r1_1', photographerId: 'p1', customerName: 'Sneha Reddy', rating: 5, comment: 'Arjun and his team made our wedding memories unforgettable. The pictures are absolutely stunning!', date: '2026-08-15', avatar: 'https://picsum.photos/seed/cust_sneha/100/100' },
  { id: 'r1_2', photographerId: 'p1', customerName: 'Rohan Sharma', rating: 4, comment: 'Very professional. Loved the candid shots, though the album took a bit longer than expected to deliver.', date: '2026-07-22', avatar: 'https://picsum.photos/seed/cust_rohan/100/100' },
  { id: 'r1_3', photographerId: 'p1', customerName: 'Kavitha Iyer', rating: 5, comment: 'Fantastic pre-wedding shoot experience in Nandi Hills. Highly recommend!', date: '2026-09-02', avatar: 'https://picsum.photos/seed/cust_kavitha/100/100' },
  // Photographer 2: Meera Studios
  { id: 'r2_1', photographerId: 'p2', customerName: 'Amit Patel', rating: 5, comment: 'Meera Studios exceeded my expectations for my professional portfolio.', date: '2026-06-10', avatar: 'https://picsum.photos/seed/cust_amit/100/100' },
  { id: 'r2_2', photographerId: 'p2', customerName: 'Pooja Desai', rating: 4, comment: 'Great lighting and setup. Made me feel very comfortable during the shoot.', date: '2026-08-05', avatar: 'https://picsum.photos/seed/cust_pooja/100/100' },
  { id: 'r2_3', photographerId: 'p2', customerName: 'Vikram Singh', rating: 5, comment: 'The best portrait photographers in Hyderabad. Crisp and clear pictures.', date: '2026-09-18', avatar: 'https://picsum.photos/seed/cust_vikram/100/100' },
  // Photographer 3: Pixel Stories by Rahul
  { id: 'r3_1', photographerId: 'p3', customerName: 'Anjali Menon', rating: 5, comment: 'Rahul captured the exact essence of our sangeet. The videos are just like a movie.', date: '2026-05-14', avatar: 'https://picsum.photos/seed/cust_anjali/100/100' },
  { id: 'r3_2', photographerId: 'p3', customerName: 'Karan Malhotra', rating: 4, comment: 'Good team, well-coordinated. The candid photography was the highlight.', date: '2026-07-30', avatar: 'https://picsum.photos/seed/cust_karan/100/100' },
  { id: 'r3_3', photographerId: 'p3', customerName: 'Neha Gupta', rating: 5, comment: 'Booked them for my brother\'s wedding. Every single photo was perfect.', date: '2026-09-12', avatar: 'https://picsum.photos/seed/cust_neha/100/100' },
  // Photographer 4: Priya Captures
  { id: 'r4_1', photographerId: 'p4', customerName: 'Sunita Rao', rating: 5, comment: 'Priya was so gentle with our newborn. The pictures brought tears to my eyes.', date: '2026-08-25', avatar: 'https://picsum.photos/seed/cust_sunita/100/100' },
  { id: 'r4_2', photographerId: 'p4', customerName: 'Deepak Kumar', rating: 4, comment: 'Nice studio setup for kids. The props used were very cute.', date: '2026-09-08', avatar: 'https://picsum.photos/seed/cust_deepak/100/100' },
  { id: 'r4_3', photographerId: 'p4', customerName: 'Anita Verma', rating: 5, comment: 'Wonderful maternity shoot! Priya made me feel beautiful and relaxed.', date: '2026-09-20', avatar: 'https://picsum.photos/seed/cust_anita/100/100' },
  // Photographer 5: Vikram Lens Art
  { id: 'r5_1', photographerId: 'p5', customerName: 'Meghna Kapoor', rating: 5, comment: 'Absolutely premium service. The coffee table book is a masterpiece.', date: '2026-04-12', avatar: 'https://picsum.photos/seed/cust_meghna/100/100' },
  { id: 'r5_2', photographerId: 'p5', customerName: 'Sanjay Reddy', rating: 5, comment: 'Vikram and his team are true artists. The destination pre-wedding was magical.', date: '2026-06-28', avatar: 'https://picsum.photos/seed/cust_sanjay/100/100' },
  { id: 'r5_3', photographerId: 'p5', customerName: 'Aishwarya Rai', rating: 4, comment: 'Expensive, but you get what you pay for. Top-notch quality.', date: '2026-08-19', avatar: 'https://picsum.photos/seed/cust_aish/100/100' },
  // Photographer 6: Nisha Creative Studio
  { id: 'r6_1', photographerId: 'p6', customerName: 'Rahul Dev', rating: 4, comment: 'Great eye for fashion styling. The lookbook turned out great.', date: '2026-07-05', avatar: 'https://picsum.photos/seed/cust_rahuld/100/100' },
  { id: 'r6_2', photographerId: 'p6', customerName: 'Simran Kaur', rating: 5, comment: 'Nisha is super creative! The portrait session was so much fun.', date: '2026-08-22', avatar: 'https://picsum.photos/seed/cust_simran/100/100' },
  { id: 'r6_3', photographerId: 'p6', customerName: 'Tanya Singh', rating: 4, comment: 'Good quality product photography for my new boutique.', date: '2026-09-15', avatar: 'https://picsum.photos/seed/cust_tanya/100/100' },
  // Photographer 7: Aditya Photography
  { id: 'r7_1', photographerId: 'p7', customerName: 'Prashant Joshi', rating: 5, comment: 'Aditya covered our corporate event flawlessly. Very professional behavior.', date: '2026-05-20', avatar: 'https://picsum.photos/seed/cust_prashant/100/100' },
  { id: 'r7_2', photographerId: 'p7', customerName: 'Radhika Kulkarni', rating: 4, comment: 'Nice photos for our family function. Delivered the soft copies on time.', date: '2026-07-14', avatar: 'https://picsum.photos/seed/cust_radhika/100/100' },
  { id: 'r7_3', photographerId: 'p7', customerName: 'Gaurav Patil', rating: 5, comment: 'Excellent headshots for our entire leadership team.', date: '2026-09-01', avatar: 'https://picsum.photos/seed/cust_gaurav/100/100' },
  // Photographer 8: Roshni Moments
  { id: 'r8_1', photographerId: 'p8', customerName: 'Divya Sharma', rating: 4, comment: 'Good budget-friendly option for kids birthday parties. Nice candid moments.', date: '2026-06-18', avatar: 'https://picsum.photos/seed/cust_divya/100/100' },
  { id: 'r8_2', photographerId: 'p8', customerName: 'Kunal Verma', rating: 5, comment: 'Roshni was great with the kids! Everyone loved the photos.', date: '2026-08-10', avatar: 'https://picsum.photos/seed/cust_kunal/100/100' },
  { id: 'r8_3', photographerId: 'p8', customerName: 'Shruti Haasan', rating: 4, comment: 'Sweet and simple maternity shoot. Very happy with the results.', date: '2026-09-22', avatar: 'https://picsum.photos/seed/cust_shruti/100/100' },
  // Photographer 9: Karthik Visuals
  { id: 'r9_1', photographerId: 'p9', customerName: 'Arvind Swamy', rating: 5, comment: 'Karthik is a legend! The dramatic lighting in our wedding photos is mind-blowing.', date: '2026-03-15', avatar: 'https://picsum.photos/seed/cust_arvind/100/100' },
  { id: 'r9_2', photographerId: 'p9', customerName: 'Priya Anand', rating: 5, comment: 'Worth every penny. The cinematic video still makes me cry happy tears.', date: '2026-05-28', avatar: 'https://picsum.photos/seed/cust_priyaa/100/100' },
  { id: 'r9_3', photographerId: 'p9', customerName: 'Siddharth Narayan', rating: 5, comment: 'Our pre-wedding shoot looks like a movie poster. Incredible work.', date: '2026-08-08', avatar: 'https://picsum.photos/seed/cust_siddharth/100/100' },
  // Photographer 10: Ananya Photo Studio
  { id: 'r10_1', photographerId: 'p10', customerName: 'Riya Sen', rating: 4, comment: 'Good reliable studio. We use them for all our company events.', date: '2026-04-20', avatar: 'https://picsum.photos/seed/cust_riya/100/100' },
  { id: 'r10_2', photographerId: 'p10', customerName: 'Manish Malhotra', rating: 5, comment: 'Excellent fashion catalog shoot. The editing was very crisp.', date: '2026-07-12', avatar: 'https://picsum.photos/seed/cust_manish/100/100' },
  { id: 'r10_3', photographerId: 'p10', customerName: 'Nandini Das', rating: 5, comment: 'Captured our silver jubilee anniversary beautifully. Highly recommended.', date: '2026-09-05', avatar: 'https://picsum.photos/seed/cust_nandini/100/100' },
];
