package me.aidan.euler;

import java.util.List;
import java.math.BigInteger;
import java.util.ArrayList;

public class Main {
	public static BigInteger smallestd = new BigInteger("0");
	public static boolean first=true;
	public static final int precision=1000;
	public static List<BigInteger> pentagonals = new ArrayList<BigInteger>();
	public static void main(String[] args) {
		for(int nj=1;nj<=precision;nj++) {
			BigInteger j = pentagon(nj);
			for(int nk=1;nk<=precision;nk++) {
				BigInteger k = pentagon(nk);
				BigInteger sum = j.add(k);
				BigInteger difference = j.subtract(k).abs();
				if(pentagonal(sum) && pentagonal(difference)) {
					if(first) smallestd=difference;
					else {
						if(difference.compareTo(smallestd)==-1) {
							smallestd=difference;
						}
					}
				}
			}
		}
		System.out.println(smallestd.toString());
	}
	public static boolean pentagonal(BigInteger n) {
		if(pentagonals.contains(n)) return true;
		int index = pentagonals.size()+1;
		while(true) {
			BigInteger cur = pentagon(index);
			pentagonals.add(cur);
			if(cur.equals(n)) return true;
			if(cur.intValue()>n.intValue()) return false;
			index++;
		}
	}
	public static BigInteger pentagon(int index) {
		BigInteger ind = new BigInteger(String.valueOf(index));
		BigInteger threenminus1j = new BigInteger("3").multiply(ind).subtract(new BigInteger("1"));
		BigInteger pentagonal = ind.multiply(threenminus1j).divide(new BigInteger("2"));
		return pentagonal;
	}
}
