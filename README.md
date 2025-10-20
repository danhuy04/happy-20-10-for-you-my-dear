# Happy Vietnamese Women's Day 💐

Một trang web đặc biệt để chúc mừng ngày 20/10 với hiệu ứng hoa bay đẹp mắt và âm thanh.

## ✨ Tính năng

- 🎵 Nhạc nền và hiệu ứng âm thanh
- 🌸 Hiệu ứng hoa bay khi nhấn nút
- 💖 Animation và hiệu ứng đẹp mắt
- 📱 Responsive design
- 🎨 Giao diện lãng mạn với màu hồng

## 🚀 Deploy lên GitHub Pages

### Bước 1: Chuẩn bị repository

1. Tạo repository mới trên GitHub với tên: `happy-20-10-for-you-my-dear`
2. Clone repository về máy:
```bash
git clone https://github.com/danhuy04/happy-20-10-for-you-my-dear.git
cd happy-20-10-for-you-my-dear
```

### Bước 2: Cập nhật cấu hình

1. **Cấu hình đã được cập nhật với username `danhuy04`**:
```json
"homepage": "https://danhuy04.github.io/happy-20-10-for-you-my-dear"
```

2. **Cập nhật `vite.config.ts`**: Thay tên repository nếu cần:
```typescript
base: '/happy-20-10-for-you-my-dear/',
```

### Bước 3: Cài đặt dependencies và build

```bash
npm install
npm run build
```

### Bước 4: Deploy

**Cách 1: Deploy tự động (Khuyến nghị)**
1. Push code lên GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Vào GitHub repository → Settings → Pages
3. Chọn "GitHub Actions" làm source
4. Workflow sẽ tự động deploy khi có commit mới

**Cách 2: Deploy thủ công**
```bash
npm run deploy
```

### Bước 5: Truy cập website

Sau khi deploy thành công, website sẽ có tại:
`https://danhuy04.github.io/happy-20-10-for-you-my-dear`

## 🛠️ Development

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build cho production
npm run build

# Preview build
npm run preview
```

## 📁 Cấu trúc project

```
├── components/
│   ├── FloatingElements.tsx    # Hiệu ứng phần tử bay
│   ├── FlowerExplosion.tsx     # Hiệu ứng hoa bay
│   ├── Modal.tsx              # Modal popup
│   └── TypingEffect.tsx        # Hiệu ứng gõ chữ
├── .github/workflows/
│   └── deploy.yml              # GitHub Actions workflow
├── App.tsx                     # Component chính
├── package.json               # Dependencies và scripts
└── vite.config.ts            # Cấu hình Vite
```

## 🎨 Customization

- Thay đổi màu sắc trong các class Tailwind CSS
- Cập nhật nội dung chúc mừng trong `App.tsx`
- Thay đổi hình ảnh background trong `ParallaxBackground`
- Điều chỉnh hiệu ứng trong các component

## 📝 Lưu ý

- Đảm bảo repository name khớp với cấu hình trong `package.json` và `vite.config.ts`
- GitHub Pages có thể mất vài phút để cập nhật sau khi deploy
- Kiểm tra Actions tab trong GitHub để theo dõi quá trình deploy