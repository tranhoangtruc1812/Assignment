import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { LienHeComponent } from './lien-he/lien-he.component';
import { GioiThieuComponent } from './gioi-thieu/gioi-thieu.component';
import { HoiDapComponent } from './hoi-dap/hoi-dap.component';
import { GopYComponent } from './gop-y/gop-y.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { DangKiComponent } from './dang-ki/dang-ki.component';
import {FormsModule} from '@angular/forms';
import { ThiTracNghiemComponent } from './thi-trac-nghiem/thi-trac-nghiem.component';
import { QuenMatKhauComponent } from './quen-mat-khau/quen-mat-khau.component';
import { CapNhatTKComponent } from './cap-nhat-tk/cap-nhat-tk.component';
import { DoiMatKhauComponent } from './doi-mat-khau/doi-mat-khau.component';
import { DanhMucComponent } from './danh-muc/danh-muc.component';
import {NgxPaginationModule} from 'ngx-pagination'

@NgModule({
  declarations: [
    AppComponent,
    TrangChuComponent,    
    LienHeComponent,    
    GioiThieuComponent,   
    HoiDapComponent,   
    GopYComponent,  
    DangNhapComponent,  
    DangKiComponent, ThiTracNghiemComponent, QuenMatKhauComponent, CapNhatTKComponent, DoiMatKhauComponent, DanhMucComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      {path:'', component:TrangChuComponent},
      {path:'TrangChu',component:TrangChuComponent},
      {path:'GioiThieu',component:GioiThieuComponent},
      {path:'LienHe',component:LienHeComponent},
      {path:'HoiDap',component:HoiDapComponent},
      {path:'GopY',component:GopYComponent},
      {path:'Dangnhap',component:DangNhapComponent},
     
      {path:'TrangChu/:DanhMucMonHoc',component:DanhMucComponent},
      {path:'TrangChu/DanhMucMonHoc/:ThiTracNghiem',component:ThiTracNghiemComponent},
      {path:'QuenMatKhau',component:QuenMatKhauComponent},
      {path:'CapNhatTaiKhoan',component:CapNhatTKComponent},
      {path:'DoiMatKhau',component:DoiMatKhauComponent},
      {path:':Dangki',component:DangKiComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
