/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package duocucmaps.dal;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 *
 * @author 56964
 */
public class conexion {
    String strConexionDB = "jdbc:sqlite:C:/Users/56964/Documents/db/duocucmaps.s3db";
    Connection con = null;
    
    public conexion(){
        try {
            Class.forName("org.sqlite.JDBC");
            con = DriverManager.getConnection(strConexionDB);
            
            System.out.println("Se ha establecido una conexion con la base de datos");
        } 
        catch (Exception e){
            System.out.println("Error, no se ha establecido una conexion con la base de datos " + e);
        }
    }
    
    public int ejecutarSentenciaSQL(String strSentenciaSQL) {
        try {
            PreparedStatement pstm = con.prepareStatement(strSentenciaSQL);
            pstm.execute();
            return 1;
        }
        catch (SQLException e){
            System.out.println(e);
            return 0;
        }
    }
    
    public ResultSet consultarRegistros(String strSentenciaSQL) {
        try {
            PreparedStatement pstm = con.prepareStatement(strSentenciaSQL);
            ResultSet respuesta = pstm.executeQuery();
            return respuesta;
        }
        catch (Exception e){
            System.out.println(e);
            return null;
        }
    }
}
