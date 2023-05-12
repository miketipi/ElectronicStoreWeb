package backend.controllers;

import backend.dto.DeleteProductDTO;
import backend.dto.InsertProductDTO;
import backend.dto.ProductListDTO;
import backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ProductController {
    @Autowired
    private ProductService productService;
    @GetMapping("/v1/product/{type}")
    public ResponseEntity<List<ProductListDTO>> getAllPhone(@PathVariable("type")String type,
                                                            @RequestParam(name = "page", required = false,defaultValue = "1")int page,
                                                            @RequestParam(value = "search",required = false)String search,
                                                            @RequestParam(value = "company",required = false)String company){
        List<ProductListDTO> productListDTOS = new ArrayList<>();
        if(search==null){
            productListDTOS = productService.getProductList(page,type);
        }
        else{
            productListDTOS = productService.findProductByKeyWord(search,page);
        }
        if (productListDTOS == null){
            return ResponseEntity.notFound().build();
        }
        if(company == null || company.isEmpty() || company.isBlank()) return ResponseEntity.ok(productListDTOS);
        return ResponseEntity.ok(productListDTOS.stream().filter(productListDTO -> productListDTO.getCompany().equals(company)).toList());
    }

    @DeleteMapping("/admin/product/delete")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<String> deletedProductById(@RequestBody DeleteProductDTO deleteProductDTO){
        if(productService.deleteProductById(deleteProductDTO.getProductId())){
            return ResponseEntity.ok("Đã xóa sản phẩm");
        }
        return ResponseEntity.badRequest().build();
    }
    @PostMapping("/admin/product/restore")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<String>restoreProductById(@RequestBody DeleteProductDTO deleteProductDTO){
        if(productService.restoreProductById(deleteProductDTO.getProductId())){
            return ResponseEntity.ok("Đã khôi phục sản phẩm");
        }
        return ResponseEntity.badRequest().build();
    }

    @PostMapping("/admin/product/add")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<String>insertProduct(@RequestBody InsertProductDTO insertProductDTO){
        if (productService.insertProduct(insertProductDTO)) {
            return ResponseEntity.ok("Đã thêm thành công");
        }
        return ResponseEntity.badRequest().build();
    }

}
