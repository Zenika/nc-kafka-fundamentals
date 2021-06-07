package com.zenika.kafka.producer.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class VehiclePositionJson {

    @JsonProperty("VP")
    public VehicleValuesJson VP;

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class VehicleValuesJson {
        @JsonProperty("desi")
        public String desi;
        @JsonProperty("dir")
        public String dir;
        @JsonProperty("oper")
        public int oper;
        @JsonProperty("veh")
        public int veh;
        @JsonProperty("tst")
        public String tst;
        @JsonProperty("tsi")
        public long tsi;
        @JsonProperty("spd")
        public Double spd;
        @JsonProperty("hdg")
        public int hdg;
        @JsonProperty("lat")
        public Double lat;
        @JsonProperty("long")
        public Double longitude;
        @JsonProperty("acc")
        public Double acc;
        @JsonProperty("dl")
        public int dl;
        @JsonProperty("odo")
        public int odo;
        @JsonProperty("drst")
        public int drst;
        @JsonProperty("oday")
        public String oday;
        @JsonProperty("jrn")
        public int jrn;
        @JsonProperty("line")
        public int line;
        @JsonProperty("start")
        public String start;
        @JsonProperty("loc")
        public String loc;
        @JsonProperty("stop")
        public String stop;
        @JsonProperty("route")
        public String route;
        @JsonProperty("occu")
        public int occu;
        @JsonProperty("seq")
        public int seq;
    }
}
