/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package duocucmaps.bl;

/**
 *
 * @author 56964
 */
public class servicioBL {
    int id_servicio;
    String nombre_servicio, ubicacion_servicio, descripcion_servicio, piso_servicio;

    public int getId_servicio() {
        return id_servicio;
    }

    public void setId_servicio(int id_servicio) {
        this.id_servicio = id_servicio;
    }

    public String getNombre_servicio() {
        return nombre_servicio;
    }

    public void setNombre_servicio(String nombre_servicio) {
        this.nombre_servicio = nombre_servicio;
    }

    public String getUbicacion_servicio() {
        return ubicacion_servicio;
    }

    public void setUbicacion_servicio(String ubicacion_servicio) {
        this.ubicacion_servicio = ubicacion_servicio;
    }

    public String getDescripcion_servicio() {
        return descripcion_servicio;
    }

    public void setDescripcion_servicio(String descripcion_servicio) {
        this.descripcion_servicio = descripcion_servicio;
    }

    public String getPiso_servicio() {
        return piso_servicio;
    }

    public void setPiso_servicio(String piso_servicio) {
        this.piso_servicio = piso_servicio;
    } 
}
