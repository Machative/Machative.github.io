package me.aidan.euler;
public class Main {
	public static int smallestd = 0;
	public static final int precision=5000;
	public static void main(String[] args) {
		total:
		for(int nj=1;nj<=precision;nj++) {
			int j = pentagon(nj);
			for(int nk=1;nk<=precision;nk++) {
				int k = pentagon(nk);
				int sum = j+k;
				int difference = Math.abs(j-k);
				if(pentagonal(sum) && pentagonal(difference)) {
					System.out.println(difference);
					break total;
				}
			}
		}
	}
	public static boolean pentagonal(int n) {
		int index=1;
		while(true) {
			int cur = pentagon(index);
			if(cur==n) return true;
			if(cur>n) return false;
			index++;
		}
	}
	public static int pentagon(int index) {
		return (index*((3*index)-1))/2;
	}
}
