// Müəllim kollektivi.
// Ad boş buraxılanda kartda yalnız vəzifə görünür (canlıda "Ad Soyad" yazısı çıxmasın deyə).
// Hazır olanda: name-ə real adı yazın, şəkli public/photos/staff/ qovluğuna atıb photo-ya fayl adını yazın (məs. '1.jpg').
// photo boşdursa şəkil sorğusu getmir, emoji göstərilir.
export const staff = [
  { name: '', photo: '', emoji: '👩‍💼', role: { az: 'Akademiya rəhbəri', ru: 'Руководитель академии' } },
  { name: '', photo: '', emoji: '📚', role: { az: 'Məktəbə hazırlıq müəllimi', ru: 'Педагог по подготовке к школе' } },
  { name: '', photo: '', emoji: '🎨', role: { az: 'Rəsm və yaradıcılıq müəllimi', ru: 'Педагог по рисованию и творчеству' } },
  { name: '', photo: '', emoji: '💃', role: { az: 'Rəqs müəllimi', ru: 'Педагог по танцам' } },
  { name: '', photo: '', emoji: '🎭', role: { az: 'Kukla teatrı rəhbəri', ru: 'Руководитель кукольного театра' } },
  { name: '', photo: '', emoji: '🧸', role: { az: 'Tərbiyəçi', ru: 'Воспитатель' } },
]
